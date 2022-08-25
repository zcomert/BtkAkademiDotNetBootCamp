using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Contracts
{
    public interface IBookRepository
    {
        List<Book> GetAllBooks();
        Book GetOneBook(int id);
        void AddOneBook(Book book);
        void UpdateOneBook(int id, Book book);

        void DeleteOneBook(Book book);
    }
}
