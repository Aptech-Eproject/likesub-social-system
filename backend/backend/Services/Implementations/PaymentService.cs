using backend.DTOs.Payment;
using backend.Entities;
using backend.Repositories.Interfaces;
using backend.Services.Interfaces;

namespace backend.Services.Implementations
{
    public class PaymentService : IPaymentService
    {
        private readonly IPayment _paymentRepository;
        private readonly IUser _userRepository;

        public PaymentService(IPayment paymentRepository, IUser userRepository)
        {
            _paymentRepository = paymentRepository;
            _userRepository = userRepository;
        }

        public async Task<PaymentResponse> CreatePaymentAsync(string userId, CreatePaymentDto request)
        {
            var user = await _userRepository.GetByIdAsync(int.Parse(userId));
            if (user == null)
            {
                throw new BadHttpRequestException("User not found");
            }

            var existingPayment = await _paymentRepository.GetByTxnCodeAsync(request.TxnCode);
            if (existingPayment != null)
            {
                throw new BadHttpRequestException("Transaction code already exists");
            }

            var payment = new Entities.Payment
            {
                UserId = userId,
                TxnCode = request.TxnCode,
                BankName = request.BankName,
                AmountPaid = request.AmountPaid,
                AmountReceived = request.AmountReceived,
                Status = PaymentStatus.Pending,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            await _paymentRepository.AddAsync(payment);

            return MapToResponse(payment);
        }

        public async Task<List<PaymentResponse>> GetUserPaymentsAsync(string userId)
        {
            var payments = await _paymentRepository.GetPaymentsByUserIdAsync(userId);
            return payments.Select(MapToResponse).ToList();
        }

        public async Task<PaymentResponse?> GetPaymentByIdAsync(long paymentId)
        {
            var payment = await _paymentRepository.GetByIdAsync((int)paymentId);
            return payment != null ? MapToResponse(payment) : null;
        }

        private PaymentResponse MapToResponse(Entities.Payment payment)
        {
            return new PaymentResponse
            {
                Id = payment.Id,
                UserId = payment.UserId,
                TxnCode = payment.TxnCode,
                BankName = payment.BankName,
                AmountPaid = payment.AmountPaid,
                AmountReceived = payment.AmountReceived,
                Status = payment.Status,
                CreatedAt = payment.CreatedAt,
                UpdatedAt = payment.UpdatedAt
            };
        }
    }
}
