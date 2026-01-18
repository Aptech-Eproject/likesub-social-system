using System.Security.Claims;

namespace backend.Middlewares
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

            if (token != null)
            {
                await AttachUserToContext(context, token);
            }

            await _next(context);
        }

        private Task AttachUserToContext(HttpContext context, string token)
        {
            try
            {
                var userId = context.User?.FindFirst("userId")?.Value;
                var role = context.User?.FindFirst(ClaimTypes.Role)?.Value;

                if (userId != null)
                {
                    context.Items["UserId"] = userId;
                    context.Items["UserRole"] = role;
                }
            }
            catch
            {
                // Token validation failed, do nothing
            }

            return Task.CompletedTask;
        }
    }
}
