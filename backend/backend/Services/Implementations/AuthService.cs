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
        private readonly IRefreshToken _refreshTokenRepository;
        private readonly IConfiguration _configuration;
        private readonly ILoginAttemptService _loginAttemptService;

        public AuthService(
            IUser userRepository, 
            JwtTokenGenerator jwtTokenGenerator, 
            IRedisService redisService,
            IRefreshToken refreshTokenRepository,
            IConfiguration configuration,
            ILoginAttemptService loginAttemptService)
        {
            _userRepository = userRepository;
            _jwtTokenGenerator = jwtTokenGenerator;
            _redisService = redisService;
            _refreshTokenRepository = refreshTokenRepository;
            _configuration = configuration;
            _loginAttemptService = loginAttemptService;
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
            // Check if account is locked
            var isLocked = await _loginAttemptService.IsAccountLockedAsync(request.EmailOrUsername);
            if (isLocked)
            {
                var remainingTime = await _loginAttemptService.GetLockoutTimeRemainingAsync(request.EmailOrUsername);
                throw new BadHttpRequestException($"Account is locked due to too many failed login attempts. Please try again after {remainingTime?.TotalMinutes:F0} minutes.");
            }

            var user = await _userRepository.GetByEmailOrUsernameAsync(request.EmailOrUsername);

            if (user == null)
            {
                await _loginAttemptService.RecordFailedAttemptAsync(request.EmailOrUsername);
                var attemptsLeft = 5 - await _loginAttemptService.GetFailedAttemptsCountAsync(request.EmailOrUsername);
                throw new BadHttpRequestException($"Invalid email/username or password. {attemptsLeft} attempts remaining.");
            }

            if (!PasswordHasher.VerifyPassword(request.Password, user.Password))
            {
                await _loginAttemptService.RecordFailedAttemptAsync(request.EmailOrUsername);
                var attemptsLeft = 5 - await _loginAttemptService.GetFailedAttemptsCountAsync(request.EmailOrUsername);
                
                if (attemptsLeft <= 0)
                {
                    throw new BadHttpRequestException("Account locked due to too many failed login attempts. Please try again after 15 minutes.");
                }
                
                throw new BadHttpRequestException($"Invalid email/username or password. {attemptsLeft} attempts remaining.");
            }

            // Reset failed attempts on successful login
            await _loginAttemptService.ResetFailedAttemptsAsync(request.EmailOrUsername);

            var token = _jwtTokenGenerator.GenerateToken(user);
            var refreshToken = await GenerateRefreshTokenAsync(user.Id);

            // Store access token in Redis with expiry
            var jwtSettings = _configuration.GetSection("Jwt");
            var accessTokenExpiry = TimeSpan.FromHours(Convert.ToDouble(jwtSettings["ExpiresInHours"]));
            await _redisService.SetAsync($"access_token:{user.Id}", token, accessTokenExpiry);

            return new LoginResponse
            {
                Token = token,
                RefreshToken = refreshToken,
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

        public async Task<LoginResponse> RefreshTokenAsync(string refreshToken)
        {
            var storedToken = await _refreshTokenRepository.GetByTokenAsync(refreshToken);

            if (storedToken == null || !storedToken.IsActive)
            {
                throw new BadHttpRequestException("Invalid or expired refresh token");
            }

            var user = await _userRepository.GetByIdAsync(int.Parse(storedToken.UserId));
            if (user == null)
            {
                throw new BadHttpRequestException("User not found");
            }

            // Generate new tokens
            var newAccessToken = _jwtTokenGenerator.GenerateToken(user);
            var newRefreshToken = await GenerateRefreshTokenAsync(user.Id);

            // Revoke old refresh token
            await _refreshTokenRepository.RevokeTokenAsync(refreshToken, newRefreshToken);

            // Store new access token in Redis
            var jwtSettings = _configuration.GetSection("Jwt");
            var accessTokenExpiry = TimeSpan.FromHours(Convert.ToDouble(jwtSettings["ExpiresInHours"]));
            await _redisService.SetAsync($"access_token:{user.Id}", newAccessToken, accessTokenExpiry);

            return new LoginResponse
            {
                Token = newAccessToken,
                RefreshToken = newRefreshToken,
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

        public async Task RevokeTokenAsync(string refreshToken)
        {
            await _refreshTokenRepository.RevokeTokenAsync(refreshToken);
        }

        private async Task<string> GenerateRefreshTokenAsync(string userId)
        {
            var refreshToken = new RefreshToken
            {
                UserId = userId,
                Token = Convert.ToBase64String(Guid.NewGuid().ToByteArray()) + Convert.ToBase64String(Guid.NewGuid().ToByteArray()),
                CreatedAt = DateTime.UtcNow,
                ExpiresAt = DateTime.UtcNow.AddDays(7) // 7 days expiry
            };

            await _refreshTokenRepository.AddAsync(refreshToken);
            return refreshToken.Token;
        }
    }
}
