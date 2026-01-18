namespace backend.DTOs.Auth
{
    public class UserLogin
    {
        public required string EmailOrUsername { get; set; }
        public required string Password { get; set; }
    }
}
