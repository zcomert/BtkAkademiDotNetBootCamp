using Entities.Models;
using Repositories.Contracts;

namespace Repositories.Concrete
{
    public class EfBookDetailRepository : EfBaseRepository<BookDetail>, IBookDetailRepository
    {
        public EfBookDetailRepository(AppDbContext context) : base(context)
        {
           
        }
    }
}
