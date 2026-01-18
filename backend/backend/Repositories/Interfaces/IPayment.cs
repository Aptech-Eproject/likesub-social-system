using backend.Entities;
using static backend.Repositories.Interfaces.IGenericRepository;

namespace backend.Repositories.Interfaces
{
    public interface IPayment : IGenericRepository<Payment>
    {
        Task<List<Payment>> GetPaymentsByUserIdAsync(string userId);
        Task<Payment?> GetByTxnCodeAsync(string txnCode);
    }
}
