import { CheckSquare } from "lucide-react";
import Image from "next/image";

export default function Benefits() {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="rounded-3xl p-4 h-96 flex items-center justify-center">
            <Image
              src="/images/why-us.png"
              alt="Mobile apps illustration"
              className="w-full h-full object-contain animate-float"
              width={300}
              height={300}
            />
          </div>
        </div>
        {/* Right: Content */}
        <div>
          <h2 className="text-[1.5rem] font-semibold text-gray-700 mb-6 leading-tight">
            Chúng tôi đang giúp thống trị mạng xã hội với bảng điều khiển mạng
            xã hội lớn nhất.
          </h2>
          <p className="text-gray-600 text-xs font-medium mb-8 leading-relaxed">
            Chúng tôi chỉ hoạt động hỗ trợ 24 giờ mỗi ngày và bảy lần một tuần
            với tất cả các nhu cầu và dịch vụ của bạn suốt cả ngày. Đừng đi đâu
            khác. Chúng tôi sẵn sàng phục vụ bạn và giúp đỡ bạn với tất cả các
            nhu cầu SMM của bạn. Người dùng hoặc Khách hàng có đơn đặt hàng SMM
            và cần dịch vụ SMM GIÁ RẺ sẽ được chào đón nhiều hơn trong PANEL SMM
            của chúng tôi.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex items-center gap-3">
              <CheckSquare size={20} stroke="#333333" />
              <span className="text-gray-700">Đa dạng dịch vụ</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckSquare size={20} stroke="#333333" />
              <span className="text-gray-700">Chất lượng tuyệt vời</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckSquare size={20} stroke="#333333" />
              <span className="text-gray-700">Giá không thể tin được</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckSquare size={20} stroke="#333333" />
              <span className="text-gray-700">
                Nhiều phương thức thanh toán
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
