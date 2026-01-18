namespace backend.Entities
{
    public class Payment
    {
        public long Id { get; set; }
        public required string UserId { get; set; }
        public required string TxnCode { get; set; }
        public string? BankName { get; set; }
        public required decimal AmountPaid { get; set; }
        public required decimal AmountReceived { get; set; }
        public required PaymentStatus Status { get; set; } = PaymentStatus.Pending;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; }
    }

    public enum PaymentStatus
    {
        Pending,
        Completed,
        Failed,
        Cancelled
    }
}
