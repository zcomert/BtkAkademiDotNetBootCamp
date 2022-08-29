using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts
{
    public interface IBookDetailService
    {
        List<BookDetail> GetAllBookDetails(Expression<Func<BookDetail,bool>> filter=null);
        BookDetail GetOneBookDetail(int bookId);
    }
}
