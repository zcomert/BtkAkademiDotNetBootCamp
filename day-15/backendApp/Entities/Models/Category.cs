using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Category
    {
        public int CategoryId { get; set; } // PK
        
        [Required(ErrorMessage ="CategoryName is required.")]
        public String? CategoryName { get; set; }
        public String? Description { get; set; }

        // Collection navigation property
        //public ICollection<Book> Books { get; set; }
    }
}
