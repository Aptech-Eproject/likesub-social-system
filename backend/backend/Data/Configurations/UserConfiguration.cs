using backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(u => u.Id);

            builder.Property(u => u.Id)
                .HasMaxLength(36)
                .IsRequired();

            builder.Property(u => u.Username)
                .HasMaxLength(50)
                .IsRequired();

            builder.HasIndex(u => u.Username)
                .IsUnique();

            builder.Property(u => u.Email)
                .HasMaxLength(100)
                .IsRequired();

            builder.HasIndex(u => u.Email)
                .IsUnique();

            builder.Property(u => u.Phone)
                .HasMaxLength(20);

            builder.HasIndex(u => u.Phone)
                .IsUnique();

            builder.Property(u => u.FullName)
                .HasMaxLength(100);

            builder.Property(u => u.Password)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(u => u.Money)
                .HasColumnType("decimal(15,2)")
                .HasDefaultValue(0.00m);

            builder.Property(u => u.TotalMoney)
                .HasColumnType("decimal(15,2)")
                .HasDefaultValue(0.00m);

            builder.Property(u => u.TokenGoogle2FA)
                .HasMaxLength(255);

            builder.Property(u => u.VerifyEmailAt);

            builder.Property(u => u.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            builder.Property(u => u.UpdatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .ValueGeneratedOnAddOrUpdate();
        }
    }
}