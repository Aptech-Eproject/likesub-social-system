namespace backend.Services.Interfaces
{
    public interface IRedisService
    {
        Task<string?> GetAsync(string key);
        Task SetAsync(string key, string value, TimeSpan? expiry = null);
        Task<bool> DeleteAsync(string key);
        Task<bool> ExistsAsync(string key);
        Task<long> IncrementAsync(string key);
        Task<bool> SetExpiryAsync(string key, TimeSpan expiry);
    }
}
