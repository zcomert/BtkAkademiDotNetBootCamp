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
    public class CategoryConfig : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(c => c.CategoryId);
            builder.Property(c => c.CategoryName).IsRequired();

            builder.HasData(
                new Category()
                {
                    CategoryId = 1,
                    CategoryName = "Computer Science",
                    Description = "Computer Science description"
                },
                new Category()
                {
                    CategoryId = 2,
                    CategoryName = "Network",
                    Description = "Network description"
                },
                new Category()
                {
                    CategoryId = 3,
                    CategoryName = "Database",
                    Description = "Database description"
                }
            );
        }
    }
}
