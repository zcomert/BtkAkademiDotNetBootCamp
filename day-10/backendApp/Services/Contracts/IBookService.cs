using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts
{
    public interface IBookService
    {
        List<Book> GetAllBooks(Expression<Func<Book, bool>> filter=null);
        Book GetOneBook(int id);

        Book CreateOneBook(Book book);
        Book UpdateOneBook(int id, Book book);
    }
}
