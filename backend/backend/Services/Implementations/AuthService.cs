using backend.DTOs.Auth;
using backend.Entities;
using backend.Helpers;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;
using Microsoft.AspNetCore.Components;

namespace backend.Services.Implementations
{
    [Route("/api/v1/auth")]
    public class AuthService : IAuthService
    {
        private readonly IUser _userRepository;
        private readonly JwtTokenGenerator _jwtTokenGenerator;
        private readonly IRedisService _redisService;

        public AuthService(IUser userRepository, JwtTokenGenerator jwtTokenGenerator, IRedisService redisService)
        {
            _userRepository = userRepository;
            _jwtTokenGenerator = jwtTokenGenerator;
            _redisService = redisService;
        }

        public async Task<RegisterResponse> RegisterAsync(UserRegisterDto request)
        {
            if (request.Password != request.ConfirmPassword)
            {
                throw new BadHttpRequestException("Password and Confirm Password do not match");
            }

            if (await _userRepository.IsEmailExistsAsync(request.Email))
            {
                throw new BadHttpRequestException("Email already exists");
            }

            if (await _userRepository.IsUsernameExistsAsync(request.Username))
            {
                throw new BadHttpRequestException("Username already exists");
            }

            var user = new User
            {
                Id = Guid.NewGuid().ToString(),
                Username = request.Username,
                Email = request.Email,
                Password = PasswordHasher.HashPassword(request.Password),
                Role = RoleType.USER,
                Money = 0.00m,
                TotalMoney = 0.00m,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            await _userRepository.AddAsync(user);

            return new RegisterResponse
            {
                Message = "User registered successfully",
                User = new UserInfo
                {
                    Id = user.Id,
                    Username = user.Username,
                    Email = user.Email,
                    FullName = user.FullName,
                    Phone = user.Phone,
                    Money = user.Money,
                    TotalMoney = user.TotalMoney,
                    Role = user.Role
                }
            };
        }

        public async Task<LoginResponse> LoginAsync(UserLogin request)
        {
            var user = await _userRepository.GetByEmailOrUsernameAsync(request.EmailOrUsername);

            if (user == null)
            {
                throw new BadHttpRequestException("Invalid email/username or password");
            }

            if (!PasswordHasher.VerifyPassword(request.Password, user.Password))
            {
                throw new BadHttpRequestException("Invalid email/username or password");
            }

            var token = _jwtTokenGenerator.GenerateToken(user);

            return new LoginResponse
            {
                Token = token,
                User = new UserInfo
                {
                    Id = user.Id,
                    Username = user.Username,
                    Email = user.Email,
                    FullName = user.FullName,
                    Phone = user.Phone,
                    Money = user.Money,
                    TotalMoney = user.TotalMoney,
                    Role = user.Role
                }
            };
        }

        public async Task<string> ForgotPasswordAsync(ForgotPasswordDto request)
        {
            var user = await _userRepository.GetByEmailAsync(request.Email);
            if (user == null)
            {
                throw new BadHttpRequestException("Email not found");
            }

            // Generate reset token (6 digits)
            var resetToken = new Random().Next(100000, 999999).ToString();
            var redisKey = $"reset_password:{user.Email}";

            // Store token in Redis with 15 minutes expiry
            await _redisService.SetAsync(redisKey, resetToken, TimeSpan.FromMinutes(15));

            // TODO: Send email with reset token
            // For now, return the token (in production, don't return it)
            return $"Reset token sent to email. Token: {resetToken}";
        }

        public async Task<string> ResetPasswordAsync(ResetPasswordDto request)
        {
            if (request.NewPassword != request.ConfirmPassword)
            {
                throw new BadHttpRequestException("Passwords do not match");
            }

            var redisKey = $"reset_password:{request.Email}";
            var storedToken = await _redisService.GetAsync(redisKey);

            if (storedToken == null)
            {
                throw new BadHttpRequestException("Invalid or expired reset token");
            }

            if (storedToken != request.Token)
            {
                throw new BadHttpRequestException("Invalid reset token");
            }

            var user = await _userRepository.GetByEmailAsync(request.Email);
            if (user == null)
            {
                throw new BadHttpRequestException("User not found");
            }

            // Update password
            user.Password = PasswordHasher.HashPassword(request.NewPassword);
            user.UpdatedAt = DateTime.UtcNow;
            await _userRepository.UpdateAsync(user);

            // Delete token from Redis
            await _redisService.DeleteAsync(redisKey);

            return "Password reset successfully";
        }
    }
}
