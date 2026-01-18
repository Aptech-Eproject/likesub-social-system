using backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace backend.Data.Configurations
{
    public class PaymentConfiguration : IEntityTypeConfiguration<Payment>
    {
        public void Configure(EntityTypeBuilder<Payment> builder)
        {
            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id)
                .ValueGeneratedOnAdd();

            builder.Property(p => p.UserId)
                .HasMaxLength(36)
                .IsRequired();

            builder.Property(p => p.TxnCode)
                .HasMaxLength(100)
                .IsRequired();

            builder.HasIndex(p => p.TxnCode)
                .IsUnique();

            builder.Property(p => p.BankName)
                .HasMaxLength(100);

            builder.Property(p => p.AmountPaid)
                .HasColumnType("decimal(15,2)")
                .IsRequired();

            builder.Property(p => p.AmountReceived)
                .HasColumnType("decimal(15,2)")
                .IsRequired();

            builder.Property(p => p.Status)
                .HasConversion<string>()
                .HasDefaultValue(PaymentStatus.Pending)
                .IsRequired();

            builder.Property(p => p.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            builder.Property(p => p.UpdatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .ValueGeneratedOnAddOrUpdate();

            builder.HasOne<User>()
                .WithMany()
                .HasForeignKey(p => p.UserId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
