using backend.DTOs.Auth;

namespace backend.Services.Interfaces
{
    public interface IAuthService
    {
        Task<RegisterResponse> RegisterAsync(UserRegisterDto request);
        Task<LoginResponse> LoginAsync(UserLogin request);
        Task<string> ForgotPasswordAsync(ForgotPasswordDto request);
        Task<string> ResetPasswordAsync(ResetPasswordDto request);
    }
}
