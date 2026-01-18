using backend.DTOs.Auth;

namespace backend.Services.Interfaces
{
    public interface IAuthService
    {
        Task<RegisterResponse> RegisterAsync(UserRegisterDto request);
        Task<LoginResponse> LoginAsync(UserLogin request);
    }
}
