using backend.Data;
using backend.Entities;
using backend.Repositories.Interfaces;

namespace backend.Repositories.Implementations
{
    public class PaymentRepository : GenericRepository<Payment>, IPayment
    {
        private readonly AppDbContext _context;
        public PaymentRepository(AppDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
