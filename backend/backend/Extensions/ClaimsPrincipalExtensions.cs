using System.Security.Claims;

namespace backend.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string? GetUserId(this ClaimsPrincipal user)
        {
            return user.FindFirst("userId")?.Value ?? user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        public static string? GetUserRole(this ClaimsPrincipal user)
        {
            return user.FindFirst(ClaimTypes.Role)?.Value ?? user.FindFirst("role")?.Value;
        }

        public static string? GetEmail(this ClaimsPrincipal user)
        {
            return user.FindFirst(ClaimTypes.Email)?.Value;
        }

        public static string? GetUsername(this ClaimsPrincipal user)
        {
            return user.FindFirst("username")?.Value;
        }
    }
}
