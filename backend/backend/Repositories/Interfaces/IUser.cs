using backend.Entities;
using static backend.Repositories.Interfaces.IGenericRepository;

namespace backend.Repositories.Interfaces
{
    public interface IUser : IGenericRepository<User>
    {
        Task<User?> GetByEmailAsync(string email);
        Task<User?> GetByUsernameAsync(string username);
        Task<User?> GetByEmailOrUsernameAsync(string emailOrUsername);
        Task<bool> IsEmailExistsAsync(string email);
        Task<bool> IsUsernameExistsAsync(string username);
    }
}
