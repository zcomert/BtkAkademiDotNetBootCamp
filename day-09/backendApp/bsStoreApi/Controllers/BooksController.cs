using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Repositories.Concrete;

namespace bsStoreApi.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BooksController : ControllerBase
    {
        private readonly EfBookRepository _bookRepository;

        public BooksController()
        {
            _bookRepository = new EfBookRepository(new AppDbContext());
        }

        [HttpGet]
        public List<Book> GetAllBooks()
        {
            return _bookRepository.Books.ToList();
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOneBook([FromRoute] int id)
        {
            var book = _bookRepository.Books.Where(b => b.Id == id)
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
            _bookRepository.Books.Add(book);
            _bookRepository.SaveChanges();
            return Ok(book);
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteOneBook([FromRoute]  int id)
        {
            var book = _bookRepository
                .Books?
                .Where(b => b.Id.Equals(id))
                .SingleOrDefault();

            if (book is null)
            {
                throw new Exception($"Book with {id} could not found!");
            }

            _bookRepository.Books.Remove(book);
            _bookRepository.SaveChanges();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateOneBook([FromRoute] int id, 
            [FromBody] Book book)
        {
            if (id != book.Id)
                throw new Exception("Ids are not matched.");
            
            var bookEntity = _bookRepository
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

            _bookRepository.SaveChanges();

            return Accepted(bookEntity);
        }
      
    }
}
