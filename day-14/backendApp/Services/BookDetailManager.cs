using Entities.Models;
using Repositories.Contracts;
using Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class BookDetailManager : IBookDetailService
    {
        // DI : Dedendency injection
        private readonly IBookDetailRepository _bookDetailRepository;

        public BookDetailManager(IBookDetailRepository bookDetailRepository)
        {
            _bookDetailRepository = bookDetailRepository; // Constructor injection
        }

        public List<BookDetail> GetAllBookDetails(Expression<Func<BookDetail, bool>> filter = null)
        {
            return _bookDetailRepository.GetAll(filter).ToList();
        }

        public BookDetail GetOneBookDetail(int bookId)
        {
            return _bookDetailRepository.Get(bd => bd.BookId == bookId);
        }
    }
}
