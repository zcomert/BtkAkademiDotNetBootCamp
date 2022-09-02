using Entities.Models;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete
{
    public class EfBookAuthorRepository
        : EfBaseRepository<BookAuthor>, IBookAuthorRepository
    {
        public EfBookAuthorRepository(AppDbContext context) 
            : base(context)
        {

        }
    }
}
