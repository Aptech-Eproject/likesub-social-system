namespace backend.DTOs.Auth
{
    public class UserRegisterDto
    {
        public required string Email { get; set; }
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required string ConfirmPassword { get; set; }
    }
}
