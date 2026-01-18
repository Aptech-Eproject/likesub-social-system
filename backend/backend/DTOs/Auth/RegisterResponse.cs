namespace backend.DTOs.Auth
{
    public class RegisterResponse
    {
        public required string Message { get; set; }
        public required UserInfo User { get; set; }
    }
}
