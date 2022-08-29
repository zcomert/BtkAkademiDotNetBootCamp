using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Author
    {
        public int AuthorId { get; set; }
        public String? FirstName { get; set; }
        public String? LastName { get; set; }

        // collection navigation property
        public ICollection<BookAuthor> BookAuthors { get; set; }

    }
}
