using backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("users"); // Đảm bảo tên bảng đồng nhất

            builder.HasKey(u => u.Id);

            builder.Property(u => u.Id)
                .HasMaxLength(36)
                .IsFixedLength() // UUID nên dùng CHAR(36) để tối ưu hiệu suất MySQL
                .IsRequired();

            builder.Property(u => u.Username)
                .HasMaxLength(50)
                .IsRequired();

            builder.HasIndex(u => u.Username).IsUnique();

            builder.Property(u => u.Email)
                .HasMaxLength(100)
                .IsRequired();

            builder.HasIndex(u => u.Email).IsUnique();

            builder.Property(u => u.Phone)
                .HasMaxLength(20);

            builder.HasIndex(u => u.Phone).IsUnique();

            builder.Property(u => u.FullName)
                .HasMaxLength(100);

            builder.Property(u => u.Password)
                .HasMaxLength(255)
                .IsRequired();

            // Sửa lỗi Sentinel cho Role
            builder.Property(u => u.Role)
                .HasConversion<string>()
                .HasMaxLength(20)
                .HasDefaultValue(RoleType.USER)
                .HasSentinel(RoleType.USER);

            builder.Property(u => u.Money)
                .HasColumnType("decimal(15,2)")
                .HasDefaultValue(0.00m);

            builder.Property(u => u.TotalMoney)
                .HasColumnType("decimal(15,2)")
                .HasDefaultValue(0.00m);

            builder.Property(u => u.TokenGoogle2FA)
                .HasMaxLength(255);

            builder.Property(u => u.VerifyEmailAt)
                .HasColumnType("datetime(6)");

            builder.Property(u => u.CreatedAt)
                .HasColumnType("datetime(6)")
                .HasDefaultValueSql("CURRENT_TIMESTAMP(6)");

            builder.Property(u => u.UpdatedAt)
                .HasColumnType("datetime(6)")
                .HasDefaultValueSql("CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)")
                .ValueGeneratedOnAddOrUpdate();
        }
    }
}