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

        public AuthService(IUser userRepository, JwtTokenGenerator jwtTokenGenerator)
        {
            _userRepository = userRepository;
            _jwtTokenGenerator = jwtTokenGenerator;
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
    }
}
