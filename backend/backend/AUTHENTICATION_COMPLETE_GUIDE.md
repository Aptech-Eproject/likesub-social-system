# Authentication & Authorization System - Complete Documentation

## Overview
Complete authentication system with advanced features including JWT tokens, refresh tokens, role-based authorization, forgot password, and security features.

## Features Implemented

### ? 1. User Authentication
- **Register**: Create new user account with email, username, password
- **Login**: Authenticate with email/username and password
- **JWT Token**: Access token with user claims (userId, role, email, username)
- **Role-Based Access**: USER and ADMIN roles

### ? 2. Refresh Token Mechanism
- **Access Token**: Stored in Redis with 24-hour expiry
- **Refresh Token**: Stored in database with 7-day expiry
- **Token Rotation**: New tokens generated on refresh, old tokens revoked
- **Token Revocation**: Ability to revoke refresh tokens

### ? 3. Forgot Password
- **Token Generation**: 6-digit OTP sent to email
- **Redis Storage**: Reset tokens stored in Redis with 15-minute expiry
- **Password Reset**: Secure password reset with token validation

### ? 4. Login Security
- **Failed Attempt Tracking**: Track failed login attempts in Redis
- **Account Lockout**: Lock account after 5 failed attempts
- **15-Minute Lockout**: Account unlocks automatically after 15 minutes
- **Attempt Counter**: Show remaining attempts to user

### ? 5. Role-Based Authorization
- **Custom Attribute**: `[AuthorizeRoles(RoleType.ADMIN)]`
- **JWT Middleware**: Extract user info from JWT claims
- **Claims Extensions**: Helper methods to get userId, role from ClaimsPrincipal

### ? 6. Payment System
- **Create Payment**: Users can create payment records
- **Payment History**: View user's payment history
- **Payment Status**: Track payment status (Pending, Completed, Failed, Cancelled)

## API Endpoints

### Authentication Endpoints

#### 1. Register
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "username": "username",
  "password": "Password123!",
  "confirmPassword": "Password123!"
}

Response:
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "username": "username",
    "email": "user@example.com",
    "role": "USER",
    "money": 0.00,
    "totalMoney": 0.00
  }
}
```

#### 2. Login
```
POST /api/auth/login
Content-Type: application/json

{
  "emailOrUsername": "user@example.com",
  "password": "Password123!"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "base64-encoded-token",
  "user": {
    "id": "uuid",
    "username": "username",
    "email": "user@example.com",
    "role": "USER",
    "money": 0.00,
    "totalMoney": 0.00
  }
}

Error (Too many attempts):
{
  "message": "Invalid email/username or password. 3 attempts remaining."
}

Error (Account locked):
{
  "message": "Account is locked due to too many failed login attempts. Please try again after 15 minutes."
}
```

#### 3. Refresh Token
```
POST /api/auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "your-refresh-token"
}

Response:
{
  "token": "new-access-token",
  "refreshToken": "new-refresh-token",
  "user": { ... }
}
```

#### 4. Revoke Token
```
POST /api/auth/revoke-token
Content-Type: application/json

{
  "refreshToken": "your-refresh-token"
}

Response:
{
  "message": "Token revoked successfully"
}
```

#### 5. Forgot Password
```
POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}

Response:
{
  "message": "Reset token sent to email. Token: 123456"
}
```

#### 6. Reset Password
```
POST /api/auth/reset-password
Content-Type: application/json

{
  "email": "user@example.com",
  "token": "123456",
  "newPassword": "NewPassword123!",
  "confirmPassword": "NewPassword123!"
}

Response:
{
  "message": "Password reset successfully"
}
```

### Payment Endpoints

#### 1. Create Payment
```
POST /api/payment
Authorization: Bearer {access-token}
Content-Type: application/json

{
  "txnCode": "TXN123456",
  "bankName": "ACB Bank",
  "amountPaid": 100000.00,
  "amountReceived": 100000.00
}

Response:
{
  "id": 1,
  "userId": "uuid",
  "txnCode": "TXN123456",
  "bankName": "ACB Bank",
  "amountPaid": 100000.00,
  "amountReceived": 100000.00,
  "status": "Pending",
  "createdAt": "2024-01-18T00:00:00Z",
  "updatedAt": "2024-01-18T00:00:00Z"
}
```

#### 2. Get My Payments
```
GET /api/payment/my-payments
Authorization: Bearer {access-token}

Response:
[
  {
    "id": 1,
    "userId": "uuid",
    "txnCode": "TXN123456",
    "bankName": "ACB Bank",
    "amountPaid": 100000.00,
    "amountReceived": 100000.00,
    "status": "Pending",
    "createdAt": "2024-01-18T00:00:00Z",
    "updatedAt": "2024-01-18T00:00:00Z"
  }
]
```

#### 3. Get Payment By ID
```
GET /api/payment/{id}
Authorization: Bearer {access-token}

Response:
{
  "id": 1,
  "userId": "uuid",
  "txnCode": "TXN123456",
  ...
}
```

## Authorization Usage

### Protect Endpoints with Roles

```csharp
using backend.Attributes;
using backend.Entities;

// Admin only
[AuthorizeRoles(RoleType.ADMIN)]
[HttpGet("admin-only")]
public IActionResult AdminOnly()
{
    return Ok("Admin access granted");
}

// Multiple roles
[AuthorizeRoles(RoleType.ADMIN, RoleType.USER)]
[HttpGet("authenticated")]
public IActionResult Authenticated()
{
    return Ok("Authenticated user");
}

// Get current user info
[Authorize]
[HttpGet("me")]
public IActionResult GetCurrentUser()
{
    var userId = User.GetUserId();
    var role = User.GetUserRole();
    var email = User.GetEmail();
    var username = User.GetUsername();
    
    return Ok(new { userId, role, email, username });
}
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id CHAR(36) PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(20) UNIQUE,
  full_name VARCHAR(100),
  password VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'USER',
  money DECIMAL(15,2) DEFAULT 0.00,
  total_money DECIMAL(15,2) DEFAULT 0.00,
  token_google_2fa VARCHAR(255),
  verify_email_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Payments Table
```sql
CREATE TABLE payments (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id CHAR(36) NOT NULL,
  txn_code VARCHAR(100) NOT NULL UNIQUE,
  bank_name VARCHAR(100),
  amount_paid DECIMAL(15,2) NOT NULL,
  amount_received DECIMAL(15,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Refresh Tokens Table
```sql
CREATE TABLE refresh_tokens (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id CHAR(36) NOT NULL,
  token VARCHAR(500) NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_revoked BOOLEAN DEFAULT FALSE,
  revoked_at TIMESTAMP,
  replaced_by_token VARCHAR(500),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Redis Keys

### Access Tokens
- **Key Pattern**: `access_token:{userId}`
- **Value**: JWT token string
- **Expiry**: 24 hours

### Reset Password Tokens
- **Key Pattern**: `reset_password:{email}`
- **Value**: 6-digit OTP
- **Expiry**: 15 minutes

### Login Attempts
- **Key Pattern**: `login_attempts:{emailOrUsername}`
- **Value**: Number of failed attempts
- **Expiry**: 15 minutes

### Account Lockout
- **Key Pattern**: `login_locked:{emailOrUsername}`
- **Value**: "locked"
- **Expiry**: 15 minutes

## Security Features

### 1. Password Security
- **BCrypt Hashing**: All passwords hashed with BCrypt
- **Password Validation**: Minimum length and complexity requirements
- **Confirmation Required**: Password and confirm password must match

### 2. Token Security
- **JWT Signing**: All tokens signed with secret key
- **Token Expiry**: Access tokens expire after 24 hours
- **Refresh Token Rotation**: New tokens on each refresh
- **Token Revocation**: Ability to revoke tokens

### 3. Rate Limiting
- **Failed Attempts**: Track failed login attempts
- **Account Lockout**: Lock account after 5 failed attempts
- **Auto Unlock**: Account unlocks after 15 minutes

### 4. Data Protection
- **User ID in Claims**: Easy access to user identity
- **Role-Based Access**: Restrict endpoints by role
- **Token Validation**: Validate tokens on each request

## Configuration

### appsettings.json
```json
{
  "ConnectionStrings": {
    "ConnectDB": "server=localhost;user=root;password=;database=like_sub_db",
    "Redis": "localhost:6379"
  },
  "JWT": {
    "Key": "your-secret-key-here-min-32-characters",
    "Issuer": "http://localhost/",
    "Audience": "LIKESUB_EDUNEXT",
    "ExpiresInHours": 24
  }
}
```

## Migration Commands

```bash
# Create migration
dotnet ef migrations add AddAuthenticationFeatures

# Update database
dotnet ef database update

# Remove last migration (if needed)
dotnet ef migrations remove
```

## Git Commits History

1. ? `feat: add role to user entity and jwt claims`
2. ? `feat: add role-based authorization middleware and attributes`
3. ? `feat: add payment creation and retrieval features`
4. ? `feat: add forgot password with redis token storage`
5. ? `feat: add refresh token mechanism with redis storage`
6. ? `feat: add login attempt limiter with 15-minute lockout after 5 failed attempts`

## Project Structure

```
backend/
??? Attributes/
?   ??? AuthorizeRolesAttribute.cs        # Custom role authorization attribute
??? Controllers/
?   ??? Auth/
?   ?   ??? AuthController.cs             # Authentication endpoints
?   ??? Payment/
?       ??? PaymentController.cs          # Payment endpoints
??? DTOs/
?   ??? Auth/
?   ?   ??? UserRegisterDto.cs
?   ?   ??? UserLogin.cs
?   ?   ??? LoginResponse.cs
?   ?   ??? ForgotPasswordDto.cs
?   ?   ??? ResetPasswordDto.cs
?   ?   ??? RefreshTokenRequest.cs
?   ??? Payment/
?       ??? CreatePaymentDto.cs
?       ??? PaymentResponse.cs
??? Entities/
?   ??? User.cs                           # User entity with Role
?   ??? Payment.cs                        # Payment entity
?   ??? RefreshToken.cs                   # Refresh token entity
??? Data/
?   ??? AppDbContext.cs                   # EF Core context
?   ??? Configurations/
?       ??? UserConfiguration.cs
?       ??? PaymentConfiguration.cs
?       ??? RefreshTokenConfiguration.cs
??? Repositories/
?   ??? Interfaces/
?   ?   ??? IUser.cs
?   ?   ??? IPayment.cs
?   ?   ??? IRefreshToken.cs
?   ??? Implementations/
?       ??? UserRepository.cs
?       ??? PaymentRepository.cs
?       ??? RefreshTokenRepository.cs
??? Services/
?   ??? Interfaces/
?   ?   ??? IAuthService.cs
?   ?   ??? IPaymentService.cs
?   ?   ??? IRedisService.cs
?   ?   ??? ILoginAttemptService.cs
?   ??? Implementations/
?       ??? AuthService.cs
?       ??? PaymentService.cs
?       ??? RedisService.cs
?       ??? LoginAttemptService.cs
??? Helpers/
?   ??? JwtTokenGenerator.cs              # JWT token generation
?   ??? PasswordHasher.cs                 # BCrypt password hashing
??? Extensions/
?   ??? ClaimsPrincipalExtensions.cs      # Helper to get user info from claims
??? Middlewares/
?   ??? JwtMiddleware.cs                  # JWT token processing
?   ??? ExceptionHandlingMiddleware.cs
??? DependencyInjection.cs                # DI configuration
```

## Testing Recommendations

### 1. Authentication Flow
- Register new user
- Login with correct credentials
- Login with wrong password (test attempt counter)
- Login after 5 failed attempts (test lockout)
- Wait 15 minutes and login again
- Test forgot password flow
- Test reset password flow

### 2. Token Management
- Get access token from login
- Use access token to call protected endpoints
- Refresh token before expiry
- Try to use revoked refresh token
- Try to use expired access token

### 3. Payment Flow
- Create payment with valid data
- Try to create payment with duplicate txn_code
- Get payment history
- Get specific payment by ID

### 4. Authorization
- Access admin-only endpoint as USER (should fail)
- Access admin-only endpoint as ADMIN (should succeed)
- Access protected endpoint without token (should fail)

## Best Practices

1. **Always use HTTPS in production**
2. **Keep JWT secret key secure** (use environment variables)
3. **Implement email service** for forgot password (currently returns token in response)
4. **Add rate limiting** on API level (not just login)
5. **Log security events** (failed logins, token revocations)
6. **Regular token cleanup** (remove expired refresh tokens from database)
7. **Implement CORS properly** for frontend integration
8. **Add input validation** with FluentValidation
9. **Monitor Redis memory usage**
10. **Backup database regularly**

## Future Enhancements

- [ ] Email verification for new users
- [ ] Two-factor authentication (2FA)
- [ ] Social login (Google, Facebook)
- [ ] Password strength meter
- [ ] Login history tracking
- [ ] Device management (logout from all devices)
- [ ] Admin dashboard for user management
- [ ] Audit logs for security events
- [ ] IP-based rate limiting
- [ ] Geolocation-based security

## Support

For issues or questions, please create an issue in the repository.

## License

MIT License
