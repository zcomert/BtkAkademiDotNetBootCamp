using Entities.Models;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete
{
    public class EfBookRepository : IBookRepository
    {
        private readonly AppDbContext _context;

        public EfBookRepository(AppDbContext context)
        {
            _context = context;
        }

        public void AddOneBook(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
        }

        public void DeleteOneBook(Book book)
        {
           _context.Books.Remove(book);
           _context.SaveChanges();
        }

        public List<Book> GetAllBooks()
        {
            return _context.Books.ToList();
        }

        public Book GetOneBook(int id)
        {
            return _context
                .Books
                .Where(b => b.Id == id)
                .SingleOrDefault();
        }

        public void UpdateOneBook(int id, Book book)
        {
           var bookEntity = GetOneBook(id);
           bookEntity.Id = id;
           bookEntity = book;
           _context.SaveChanges();
        }
    }
}
