using backend.Entities;

namespace backend.DTOs.Auth
{
    public class LoginResponse
    {
        public required string Token { get; set; }
        public required UserInfo User { get; set; }
    }

    public class UserInfo
    {
        public required string Id { get; set; }
        public required string Username { get; set; }
        public required string Email { get; set; }
        public string? FullName { get; set; }
        public string? Phone { get; set; }
        public decimal Money { get; set; }
        public decimal TotalMoney { get; set; }
        public required RoleType Role { get; set; }
    }
}
