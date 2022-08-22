using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class Book
    {
        // Auto-implemented property
        public int Id { get; set; }
        public String Title { get; set; }

        public Book()
        {

        }

        public Book(int id, string title)
        {
            Id = id;
            Title = title;
        }

        public override string? ToString()
        {
            return $"{this.Id} {this.Title}";
        }
    }
}
