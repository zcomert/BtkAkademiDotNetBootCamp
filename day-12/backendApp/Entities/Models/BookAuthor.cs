using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class BookAuthor
    {
        public int BookAuthorId { get; set; } // PK

        // Navigation : FK
        public int? BookId { get; set; }
        public Book? Book { get; set; }

        // Navigation : FK
        public int? AuthorId { get; set; }
        public Author? Author { get; set; }
    }
}
