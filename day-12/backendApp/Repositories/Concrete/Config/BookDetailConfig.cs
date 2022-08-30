using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.Concrete.Config
{
    public class BookDetailConfig : IEntityTypeConfiguration<BookDetail>
    {
        public void Configure(EntityTypeBuilder<BookDetail> builder)
        {
            builder.HasKey(bd => bd.BookDetailId);

            builder.HasOne(bd => bd.Book)
             .WithOne(b => b.BookDetail)
             .HasForeignKey<BookDetail>(bd => bd.BookId)
             .OnDelete(DeleteBehavior.Cascade);

            builder.HasData(
                new BookDetail()
                {
                    BookDetailId = 1,
                    BookId = 1,
                    City = "Samsun",
                    Country = "Turkey",
                    ISBN = "1234-5456-1234",
                    Language = "Turkish",
                    NumberOfPage = 100,
                    Publisher = "Samsun University"
                },
                new BookDetail()
                {
                    BookDetailId = 2,
                    BookId = 2,
                    City = "Ankara",
                    Country = "Turkey",
                    ISBN = "1234-5456-7891",
                    Language = "Turkish",
                    NumberOfPage = 150,
                    Publisher = "Gazi University"
                },
                new BookDetail()
                {
                    BookDetailId = 3,
                    BookId = 3,
                    City = "İstanbul",
                    Country = "Turkey",
                    ISBN = "8741-5456-1234",
                    Language = "Turkish",
                    NumberOfPage = 78,
                    Publisher = "Yıldız Techincal University"
                }
            );


        }
    }


}
