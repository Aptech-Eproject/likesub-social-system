namespace backend.Services.Interfaces
{
    public interface ILoginAttemptService
    {
        Task<bool> IsAccountLockedAsync(string identifier);
        Task RecordFailedAttemptAsync(string identifier);
        Task ResetFailedAttemptsAsync(string identifier);
        Task<int> GetFailedAttemptsCountAsync(string identifier);
        Task<TimeSpan?> GetLockoutTimeRemainingAsync(string identifier);
    }
}
