using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Repositories.Concrete;

namespace bsStoreApi.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BooksController : ControllerBase
    {
        private AppDbContext _context;

        public BooksController() // DI
        {
            _context = new AppDbContext();  // Tightly coupled
        }

        [HttpGet]
        public List<Book> GetAllBooks()
        {
            return _context.Books.ToList();
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOneBook([FromRoute] int id)
        {
            var book = _context.Books.Where(b => b.Id == id)
                .SingleOrDefault();

            if (book is null)
            {
                throw new Exception($"Book with {id} could not found.");
            }

            return Ok(book);
        }

        [HttpPost]
        public IActionResult CreateOneBook([FromBody]Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
            return Ok(book);
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteOneBook(int id)
        {
            var book = _context
                .Books?
                .Where(b => b.Equals(id))
                .SingleOrDefault();

            if (book is null)
            {
                throw new Exception($"Book with {id} could not found!");
            }

            _context.Books.Remove(book);
            _context.SaveChanges();
            return NoContent();
        }
      
    }
}
