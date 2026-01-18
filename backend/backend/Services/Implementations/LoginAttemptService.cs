using backend.Services.Interfaces;

namespace backend.Services.Implementations
{
    public class LoginAttemptService : ILoginAttemptService
    {
        private readonly IRedisService _redisService;
        private const int MaxFailedAttempts = 5;
        private const int LockoutMinutes = 15;

        public LoginAttemptService(IRedisService redisService)
        {
            _redisService = redisService;
        }

        public async Task<bool> IsAccountLockedAsync(string identifier)
        {
            var lockKey = $"login_locked:{identifier}";
            return await _redisService.ExistsAsync(lockKey);
        }

        public async Task RecordFailedAttemptAsync(string identifier)
        {
            var attemptKey = $"login_attempts:{identifier}";
            var lockKey = $"login_locked:{identifier}";

            // Increment failed attempts
            var attempts = await _redisService.IncrementAsync(attemptKey);

            // Set expiry for attempts counter (15 minutes)
            if (attempts == 1)
            {
                await _redisService.SetExpiryAsync(attemptKey, TimeSpan.FromMinutes(LockoutMinutes));
            }

            // Lock account if max attempts reached
            if (attempts >= MaxFailedAttempts)
            {
                await _redisService.SetAsync(lockKey, "locked", TimeSpan.FromMinutes(LockoutMinutes));
                await _redisService.DeleteAsync(attemptKey); // Clear attempts counter
            }
        }

        public async Task ResetFailedAttemptsAsync(string identifier)
        {
            var attemptKey = $"login_attempts:{identifier}";
            await _redisService.DeleteAsync(attemptKey);
        }

        public async Task<int> GetFailedAttemptsCountAsync(string identifier)
        {
            var attemptKey = $"login_attempts:{identifier}";
            var count = await _redisService.GetAsync(attemptKey);
            return count != null ? int.Parse(count) : 0;
        }

        public async Task<TimeSpan?> GetLockoutTimeRemainingAsync(string identifier)
        {
            var lockKey = $"login_locked:{identifier}";
            var isLocked = await _redisService.ExistsAsync(lockKey);
            
            if (!isLocked)
                return null;

            // Redis doesn't have a direct way to get TTL through IDatabase in the simple implementation
            // For now, return the max lockout time
            return TimeSpan.FromMinutes(LockoutMinutes);
        }
    }
}
