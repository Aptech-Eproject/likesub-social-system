# Token Refresh Queue - Giải pháp xử lý concurrent requests khi access token hết hạn

## 📋 Tổng quan

Token Refresh Queue là cơ chế quản lý việc làm mới token khi có nhiều API requests đồng thời nhận lỗi 401 (Unauthorized). Nó đảm bảo chỉ có **một request duy nhất** gọi API refresh token, các request còn lại sẽ chờ đợi và tự động retry sau khi token mới được cấp.

---

## 🚨 Vấn đề khi KHÔNG có Queue

### Kịch bản

1. User đã đăng nhập → có `access_token`
2. Access token hết hạn
3. Cùng một lúc, nhiều trang/component gọi API:
   - Trang A: `GET /api/me`
   - Trang B: `GET /api/notifications`
   - Trang C: `GET /api/settings`

4. **👉 Cả 3 requests đồng thời nhận response 401**

### ❌ Hậu quả nếu không xử lý

```
Request A nhận 401 → gọi /auth/refresh → nhận token mới (token_v2)
Request B nhận 401 → gọi /auth/refresh → nhận token mới (token_v3) 
Request C nhận 401 → gọi /auth/refresh → nhận token mới (token_v4)
```

**Các vấn đề phát sinh:**

- ⚠️ **Server bị spam** - gọi refresh API nhiều lần không cần thiết
- ⚠️ **Token bị ghi đè lộn xộn** - token_v2 → token_v3 → token_v4
- ⚠️ **Race condition** - Request A retry với token_v2 nhưng token hiện tại đã là token_v4 → lỗi
- ⚠️ **Lãng phí tài nguyên** - server & client xử lý nhiều lần cho cùng 1 việc
- ⚠️ **UX kém** - user có thể bị logout không đáng có

---

## ✅ Giải pháp: Token Refresh Queue

### Nguyên lý hoạt động

**Chỉ cho phép 1 request refresh token tại một thời điểm, các request còn lại xếp hàng đợi**

```
Request A nhận 401 → bắt đầu refresh (gọi /auth/refresh)
Request B nhận 401 → vào hàng đợi
Request C nhận 401 → vào hàng đợi

→ Request A thành công → token_v2
→ Xử lý hàng đợi: B và C tự động retry với token_v2
```

---

## 🔄 Luồng xử lý chi tiết

### 1️⃣ Request đầu tiên nhận 401

```typescript
// Request A gọi GET /api/me
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      
      // ✅ Kiểm tra: có ai đang refresh không?
      if (tokenRefreshQueue.refreshing) {
        // ❌ Đã có request khác đang refresh
        // → Vào hàng đợi (bước 2)
      } else {
        // ✅ Chưa có ai refresh
        // → Bắt đầu refresh token
        tokenRefreshQueue.startRefresh(); // 🔐 Lock
        
        try {
          await AuthApi.refreshToken(); // Gọi API refresh
          tokenRefreshQueue.processQueue(); // Xử lý hàng đợi
          return privateApi(originalRequest); // Retry request A
        } catch (err) {
          tokenRefreshQueue.processQueue(err); // Reject toàn bộ queue
          // Logout user
        } finally {
          tokenRefreshQueue.endRefresh(); // 🔓 Unlock
        }
      }
    }
  }
);
```

### 2️⃣ Các request tiếp theo vào hàng đợi

```typescript
// Request B, C nhận 401 trong lúc A đang refresh
if (tokenRefreshQueue.refreshing) {
  return new Promise((resolve, reject) => {
    tokenRefreshQueue.enqueue({
      resolve: () => resolve(privateApi(originalRequest)),
      reject: (err) => reject(err)
    });
  });
}
```

**Giải thích:**
- Request B, C không gọi refresh nữa
- Chúng tạo Promise và cho vào queue
- Promise sẽ được resolve/reject khi request A hoàn thành

### 3️⃣ Xử lý hàng đợi sau khi refresh thành công

```typescript
// Trong TokenRefreshQueue class
processQueue(error?: unknown) {
  this.queue.forEach(item => {
    if (error) {
      item.reject(error); // Refresh thất bại → reject tất cả
    } else {
      item.resolve(); // Refresh thành công → retry tất cả requests
    }
  });
  this.queue = []; // Clear queue
}
```

**Flow:**
```
Request A refresh thành công
  ↓
tokenRefreshQueue.processQueue() được gọi
  ↓
Tất cả Promise trong queue được resolve()
  ↓
Request B, C tự động retry với token mới
```

---


## 🎯 Lợi ích

| Vấn đề | Không có Queue | Có Queue |
|--------|---------------|----------|
| **Số lần gọi refresh API** | 3 lần (A, B, C) | 1 lần (chỉ A) |
| **Server load** | Cao ❌ | Thấp ✅ |
| **Race condition** | Có ❌ | Không ✅ |
| **Token consistency** | Lộn xộn ❌ | Nhất quán ✅ |
| **UX** | Có thể bị logout ❌ | Mượt mà ✅ |

---

## ⚠️ Lưu ý khi implement

1. **Đánh dấu retry** - Dùng `_retry` flag để tránh vòng lặp vô hạn
2. **Exclude refresh endpoint** - Không retry request `/auth/refresh`
3. **Error handling** - Phải xử lý cả trường hợp refresh thất bại
4. **Clear auth** - Logout user khi refresh token hết hạn
5. **Thread safety** - Đảm bảo `isRefreshing` flag hoạt động đúng

---

## 🔍 Tóm tắt

> **Token Refresh Queue = Cơ chế đồng bộ hóa việc refresh token khi có nhiều API requests đồng thời nhận lỗi 401**

**Công thức:**
```
1 request refresh + N requests chờ đợi = 1 lần gọi API refresh
```

**Kết quả:** Hiệu suất cao hơn, code sạch hơn, UX tốt hơn ✨