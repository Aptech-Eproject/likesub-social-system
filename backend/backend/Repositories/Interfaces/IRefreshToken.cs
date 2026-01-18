using backend.Entities;
using static backend.Repositories.Interfaces.IGenericRepository;

namespace backend.Repositories.Interfaces
{
    public interface IRefreshToken : IGenericRepository<RefreshToken>
    {
        Task<RefreshToken?> GetByTokenAsync(string token);
        Task<List<RefreshToken>> GetActiveTokensByUserIdAsync(string userId);
        Task RevokeTokenAsync(string token, string? replacedByToken = null);
        Task RevokeAllUserTokensAsync(string userId);
    }
}
