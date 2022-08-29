using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class BookDetail
    {
        public int BookDetailId { get; set; } // PK
        public int NumberOfPage { get; set; }
        public String ISBN { get; set; }
        public String City { get; set; }
        public String Country { get; set; }
        public String Language { get; set; }
        public String Publisher { get; set; }

        public int? BookId { get; set; }
        // navigation property
        public Book Book { get; set; }
    }
}
