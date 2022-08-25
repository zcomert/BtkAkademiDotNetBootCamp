using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.Concrete.Config
{
    public class AuthorConfig : IEntityTypeConfiguration<Author>
    {
        public void Configure(EntityTypeBuilder<Author> builder)
        {
            builder.HasKey( a => a.AuthorId );
            builder.Property(a => a.FirstName).IsRequired();
            builder.Property(a => a.LastName).IsRequired();

            builder.HasData(
                new Author { AuthorId=1, FirstName="İskender", LastName="Pala"},
                new Author { AuthorId=2, FirstName="Ali", LastName="Şeriatı"},
                new Author { AuthorId=3, FirstName="Ömer", LastName="Seyfettin"}
                );
        }
    }
}
