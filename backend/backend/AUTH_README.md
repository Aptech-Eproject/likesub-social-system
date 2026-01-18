# Authentication API Documentation

## Endpoints

### 1. Register User
**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "Password123!",
  "confirmPassword": "Password123!"
}
```

**Response (Success - 200 OK):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid-here",
    "username": "username",
    "email": "user@example.com",
    "fullName": null,
    "phone": null,
    "money": 0.00,
    "totalMoney": 0.00
  }
}
```

**Response (Error - 400 Bad Request):**
```json
{
  "message": "Email already exists" 
  // ho?c "Username already exists"
  // ho?c "Password and Confirm Password do not match"
}
```

---

### 2. Login User
**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "emailOrUsername": "user@example.com", // or "username"
  "password": "Password123!"
}
```

**Response (Success - 200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid-here",
    "username": "username",
    "email": "user@example.com",
    "fullName": null,
    "phone": null,
    "money": 0.00,
    "totalMoney": 0.00
  }
}
```

**Response (Error - 400 Bad Request):**
```json
{
  "message": "Invalid email/username or password"
}
```

---

## Project Structure

```
backend/
??? Controllers/
?   ??? Auth/
?       ??? AuthController.cs           # API endpoints for authentication
??? Services/
?   ??? Interfaces/
?   ?   ??? IAuthService.cs            # Service interface
?   ??? Implementations/
?       ??? AuthService.cs             # Business logic for authentication
??? Repositories/
?   ??? Interfaces/
?   ?   ??? IUser.cs                   # Repository interface for User
?   ??? Implementations/
?       ??? UserRepository.cs          # Data access for User entity
??? DTOs/
?   ??? Auth/
?       ??? UserLogin.cs               # DTO for login request
?       ??? UserRegisterDto.cs         # DTO for register request
?       ??? LoginResponse.cs           # DTO for login response
?       ??? RegisterResponse.cs        # DTO for register response
??? Entities/
?   ??? User.cs                        # User entity
?   ??? Payment.cs                     # Payment entity
??? Data/
?   ??? AppDbContext.cs                # EF Core DbContext
?   ??? Configurations/
?       ??? UserConfiguration.cs       # Fluent API config for User
?       ??? PaymentConfiguration.cs    # Fluent API config for Payment
??? Helpers/
?   ??? JwtTokenGenerator.cs           # JWT token generation helper
?   ??? PasswordHasher.cs              # Password hashing helper using BCrypt
??? Utils/
?   ??? Helpers.cs                     # Utility helpers (ConvertSnakeCase)
??? DependencyInjection.cs             # DI container configuration
```

## Technologies Used
- **.NET 8.0**
- **Entity Framework Core** - ORM for database access
- **Pomelo.EntityFrameworkCore.MySql** - MySQL provider for EF Core
- **BCrypt.Net-Next** - Password hashing
- **JWT Bearer Authentication** - Token-based authentication
- **FluentValidation** - Input validation
- **StackExchange.Redis** - Redis caching

## Configuration

### appsettings.json
Make sure you have the following configuration:

```json
{
  "ConnectionStrings": {
    "ConnectDB": "server=localhost;user=root;password=;database=like_sub_db",
    "Redis": "localhost:6379"
  },
  "JWT": {
    "Key": "your-secret-key-here",
    "Issuer": "http://localhost/",
    "Audience": "LIKESUB_EDUNEXT",
    "ExpiresInHours": 24
  }
}
```

## How to Run

1. **Update Database**
   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```

2. **Run the Application**
   ```bash
   dotnet run
   ```

3. **Test with Swagger**
   Navigate to: `https://localhost:<port>/swagger`

## Authentication Flow

1. **Register:**
   - User sends registration data (email, username, password, confirmPassword)
   - System validates input (email/username uniqueness, password match)
   - Password is hashed using BCrypt
   - User is created with GUID as ID
   - Returns user info (without password)

2. **Login:**
   - User sends email/username and password
   - System finds user by email or username
   - Verifies password using BCrypt
   - Generates JWT token with user claims
   - Returns token and user info

3. **Protected Routes:**
   - Client includes JWT token in Authorization header: `Bearer <token>`
   - Server validates token using JWT middleware
   - Extracts user information from claims

## Dependency Injection

All services, repositories, and helpers are registered in `DependencyInjection.cs`:

- **Services:** `IAuthService -> AuthService`
- **Repositories:** `IUser -> UserRepository`
- **Helpers:** `JwtTokenGenerator`
- **Infrastructure:** `AppDbContext`, `Redis Connection`

## Security Notes

- Passwords are hashed using BCrypt (industry-standard)
- JWT tokens expire after 24 hours (configurable)
- Email and username are unique constraints
- All sensitive operations use async/await for better performance
