using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete.Config
{
    public class BookConfig : IEntityTypeConfiguration<Book>
    {
        // Fluent API
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.HasKey(b => b.Id);

            builder.Property(b => b.Title).IsRequired();
            builder.Property(b => b.Price).HasDefaultValue(10);
            builder.Property(b => b.AtCreated).HasDefaultValueSql("GETDATE()");

        }
    }
}
