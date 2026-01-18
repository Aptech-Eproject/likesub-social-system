namespace backend.Entities
{
    public class User
    {
        public required string Id { get; set; }
        public required string Username { get; set; }
        public required string Email { get; set; }
        public string? Phone { get; set; }
        public string? FullName { get; set; }
        public required string Password { get; set; }
        public required RoleType Role { get; set; } = RoleType.USER;

        public decimal Money { get; set; } = 0.00m;
        public decimal TotalMoney { get; set; } = 0.00m;
        public string? TokenGoogle2FA { get; set; }
        public DateTime? VerifyEmailAt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; }
    }

    public enum RoleType
    {
        ADMIN,
        USER
    }
}
