using Entities.Models;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete
{
    public class EfAuthorRepository : EfBaseRepository<Author>, IAuthorRepository
    {
        public EfAuthorRepository(AppDbContext context) : base(context)
        {

        }
    }
}
