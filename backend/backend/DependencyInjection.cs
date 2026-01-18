using backend.Data;
using backend.Helpers;
using backend.Repositories.Implementations;
using backend.Repositories.Interfaces;
using backend.Services.Implementations;
using backend.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;
using static backend.Repositories.Interfaces.IGenericRepository;

namespace backend
{
    // phải là dạng static vì nó là method extends
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            // Services
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IPaymentService, PaymentService>();
            services.AddSingleton<IRedisService, RedisService>();
            services.AddSingleton<ILoginAttemptService, LoginAttemptService>();
            
            // Helpers
            services.AddScoped<JwtTokenGenerator>();

            return services;
        }

        public static IServiceCollection AddApplicationInfrastructure(
            this IServiceCollection services,
            IConfiguration configuration)
        {

            // Connect String DB
            var connectStringDB = configuration.GetConnectionString("ConnectDB");
            var serverVersion = ServerVersion.AutoDetect(connectStringDB);
            services.AddDbContext<AppDbContext>(options => options.UseMySql(connectStringDB, serverVersion));

            // Connect String Redis
            var connectStringRedis = configuration.GetConnectionString("Redis");
            // ConnectionMultiplexer: mở kết nối tới server redis
            services.AddSingleton<IConnectionMultiplexer>(sp => ConnectionMultiplexer.Connect(connectStringRedis!));


            // Đăng ký tất cả các validator của Fluent trong assembly
            // Chỉ cần cài 1 cái thôi bất kỳ: CreateCategoryValidator (là nó sẽ tự hiểu hết), miễn kế thừa đúng cái AbstractionValidator là ok
            //services.AddValidatorsFromAssemblyContaining<CreateCategoryValidator>();

            // Repository
            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
            services.AddScoped<IUser, UserRepository>();
            services.AddScoped<IPayment, PaymentRepository>();
            services.AddScoped<IRefreshToken, RefreshTokenRepository>();

            return services;
        }
    }
}
