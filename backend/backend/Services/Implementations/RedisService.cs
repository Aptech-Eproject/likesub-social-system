using backend.Services.Interfaces;
using StackExchange.Redis;

namespace backend.Services.Implementations
{
    public class RedisService : IRedisService
    {
        private readonly IDatabase _database;

        public RedisService(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<string?> GetAsync(string key)
        {
            var value = await _database.StringGetAsync(key);
            return value.HasValue ? value.ToString() : null;
        }

        public async Task SetAsync(string key, string value, TimeSpan? expiry = null)
        {
            if (expiry.HasValue)
            {
                await _database.StringSetAsync(key, value, expiry.Value);
            }
            else
            {
                await _database.StringSetAsync(key, value);
            }
        }

        public async Task<bool> DeleteAsync(string key)
        {
            return await _database.KeyDeleteAsync(key);
        }

        public async Task<bool> ExistsAsync(string key)
        {
            return await _database.KeyExistsAsync(key);
        }

        public async Task<long> IncrementAsync(string key)
        {
            return await _database.StringIncrementAsync(key);
        }

        public async Task<bool> SetExpiryAsync(string key, TimeSpan expiry)
        {
            return await _database.KeyExpireAsync(key, expiry);
        }
    }
}
