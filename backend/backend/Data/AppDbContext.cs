

using backend.Data.Configurations;
using backend.Entities;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Apply entity configurations
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new PaymentConfiguration());
            modelBuilder.ApplyConfiguration(new RefreshTokenConfiguration());

            // Chuyển thành chữ thường
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                // table name
                entity.SetTableName(Helpers.Helpers.ConvertSnakeCase(entity.GetTableName()!));

                // column name
                foreach (var property in entity.GetProperties())
                {
                    property.SetColumnName(Helpers.Helpers.ConvertSnakeCase(property.GetColumnName()));
                }

                // FK, Index, Key
                foreach (var key in entity.GetKeys())
                {
                    key.SetName(Helpers.Helpers.ConvertSnakeCase(key.GetName()!));
                }

                foreach (var index in entity.GetIndexes())
                {
                    index.SetDatabaseName(Helpers.Helpers.ConvertSnakeCase(index.GetDatabaseName()!));
                }

            }

        }
    }
}
