using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete
{
    public class EfBookRepository : EfBaseRepository<Book>, IBookRepository
    {
        public EfBookRepository(AppDbContext context) : base(context)
        {

        }

        public List<Book> GetAllBooksWithDetails()
        {
            return _context
                 .Books
                 .Include(b => b.BookDetail)    // navigation property
                 .Include(b => b.Category)      // navigation property
                 .Include(b => b.BookAuthors)   // navigation property
                 .ThenInclude(ba => ba.Author)
                 .ToList();
        }

        public List<Book> GetLastestBook(int n)
        {
            return _context
                .Books
                .OrderByDescending(b => b.Id)
                .Take(n)
                .ToList(); 
        }
    }
}
