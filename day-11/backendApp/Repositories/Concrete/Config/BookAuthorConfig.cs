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
    public class BookAuthorConfig : IEntityTypeConfiguration<BookAuthor>
    {
        public void Configure(EntityTypeBuilder<BookAuthor> builder)
        {
            builder.HasKey(ba => ba.BookAuthorId); // Convention

            // BookAuthor - Book 
            builder.HasOne(ba => ba.Book)
                .WithMany(b => b.BookAuthors)
                .HasForeignKey(ba => ba.BookId)
                .OnDelete(DeleteBehavior.Cascade);

            // BookAuthor - Author
            builder.HasOne(ba => ba.Author)
                .WithMany(a => a.BookAuthors)
                .HasForeignKey(ba => ba.AuthorId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasData(
                new BookAuthor() { BookAuthorId=1, BookId=1, AuthorId=1},
                new BookAuthor() { BookAuthorId=2, BookId=1, AuthorId=2},
                new BookAuthor() { BookAuthorId=3, BookId=1, AuthorId=3},

                new BookAuthor() { BookAuthorId = 4, BookId = 2, AuthorId = 2 },
                new BookAuthor() { BookAuthorId = 5, BookId = 2, AuthorId = 3 },

                new BookAuthor() { BookAuthorId = 6, BookId = 3, AuthorId = 1 },
                new BookAuthor() { BookAuthorId = 7, BookId = 3, AuthorId = 2 },
                new BookAuthor() { BookAuthorId = 8, BookId = 3, AuthorId = 3 }

                );

        }
    }
}
