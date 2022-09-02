using Entities.Dtos;
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
        List<Book> GetAllBooksWithDetails();
        Book GetOneBookWithDetails(int id);
        Book GetOneBook(int id);

        Book CreateOneBook(BookDtoForInsertion bookDto);
        Book UpdateOneBook(int id, Book book);
        void DeleteOneBook(int id);

        List<Book> GetLastestBook(int n);

        
    }
}
