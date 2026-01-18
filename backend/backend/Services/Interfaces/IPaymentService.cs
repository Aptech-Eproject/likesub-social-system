using backend.DTOs.Payment;

namespace backend.Services.Interfaces
{
    public interface IPaymentService
    {
        Task<PaymentResponse> CreatePaymentAsync(string userId, CreatePaymentDto request);
        Task<List<PaymentResponse>> GetUserPaymentsAsync(string userId);
        Task<PaymentResponse?> GetPaymentByIdAsync(long paymentId);
    }
}
