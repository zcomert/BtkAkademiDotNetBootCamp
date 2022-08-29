using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Book
    {
        public int Id { get; set; } // PK
        public String? Title { get; set; }
        public decimal Price { get; set; }
        public String? Summary { get; set; }

        public DateTime AtCreated { get; set; }
        
        // navigation property
        public BookDetail BookDetail { get; set; }

        // navigation
        public int CategoryId { get; set; }
        public Category Category { get; set; }

        // collection navigation property
        public ICollection<BookAuthor> BookAuthors { get; set; }

        public override string ToString()
        {
            return $"{Id,-5} {Title,-40} {Price,-5}";
        }
    }
}
