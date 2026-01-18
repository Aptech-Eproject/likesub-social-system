namespace backend.DTOs.Payment
{
    public class CreatePaymentDto
    {
        public required string TxnCode { get; set; }
        public string? BankName { get; set; }
        public required decimal AmountPaid { get; set; }
        public required decimal AmountReceived { get; set; }
    }
}
