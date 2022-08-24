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
        public IActionResult DeleteOneBook([FromRoute]  int id)
        {
            var book = _context
                .Books?
                .Where(b => b.Id.Equals(id))
                .SingleOrDefault();

            if (book is null)
            {
                throw new Exception($"Book with {id} could not found!");
            }

            _context.Books.Remove(book);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateOneBook([FromRoute] int id, 
            [FromBody] Book book)
        {
            if (id != book.Id)
                throw new Exception("Ids are not matched.");
            
            var bookEntity = _context
                .Books?
                .Where(b => b.Id == id)
                .SingleOrDefault();

            if(bookEntity is null)
            {
                throw new Exception($"Book with {id} id could not found. ");
            }

            // OK 
            bookEntity.Title = book.Title;
            bookEntity.Price = book.Price;
            bookEntity.Summary = book.Summary;

            _context.SaveChanges();

            return Accepted(bookEntity);
        }
      
    }
}
