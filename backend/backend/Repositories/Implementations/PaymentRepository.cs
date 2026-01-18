using backend.Data;
using backend.Entities;
using backend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories.Implementations
{
    public class PaymentRepository : GenericRepository<Payment>, IPayment
    {
        private readonly AppDbContext _context;
        public PaymentRepository(AppDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<List<Payment>> GetPaymentsByUserIdAsync(string userId)
        {
            return await _context.Payments
                .Where(p => p.UserId == userId)
                .OrderByDescending(p => p.CreatedAt)
                .ToListAsync();
        }

        public async Task<Payment?> GetByTxnCodeAsync(string txnCode)
        {
            return await _context.Payments.FirstOrDefaultAsync(p => p.TxnCode == txnCode);
        }
    }
}
