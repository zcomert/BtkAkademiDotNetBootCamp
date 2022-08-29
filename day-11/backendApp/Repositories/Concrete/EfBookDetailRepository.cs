using Entities.Models;
using Repositories.Contracts;

namespace Repositories.Concrete
{
    public class EfBookDetailRepository : EfBaseRepository<BookDetail>, IBookDetail
    {
        public EfBookDetailRepository(AppDbContext context) : base(context)
        {
           
        }
    }
}
