using backend.Entities;

namespace backend.DTOs.Payment
{
    public class PaymentResponse
    {
        public long Id { get; set; }
        public required string UserId { get; set; }
        public required string TxnCode { get; set; }
        public string? BankName { get; set; }
        public decimal AmountPaid { get; set; }
        public decimal AmountReceived { get; set; }
        public required PaymentStatus Status { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
