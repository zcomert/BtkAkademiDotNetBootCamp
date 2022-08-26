using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Repositories.Concrete;
using Repositories.Contracts;

namespace bsStoreApi.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BooksController : ControllerBase
    {
        private readonly IBookRepository _bookRepository;

        public BooksController(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        [HttpGet]
        public IActionResult GetAllBooks()
        {
            return Ok(_bookRepository.GetAll());
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOneBook([FromRoute] int id)
        {
            var book = _bookRepository.Get(b => b.Id==id);

            if (book is null)
            {
                throw new Exception($"Book with {id} could not found.");
            }

            return Ok(book);
        }

        [HttpPost]
        public IActionResult CreateOneBook([FromBody]Book book)
        {
            _bookRepository.Add(book);  
            return Ok(book);
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteOneBook([FromRoute]  int id)
        {
            var book = _bookRepository.Get(b => b.Id==id);  

            if (book is null)
            {
                throw new Exception($"Book with {id} could not found!");
            }

            _bookRepository.Delete(book);
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateOneBook([FromRoute] int id, 
            [FromBody] Book book)
        {
            if (id != book.Id)
                throw new Exception("Ids are not matched.");

            var bookEntity = _bookRepository.Get(b => b.Id==id);
                

            if(bookEntity is null)
            {
                throw new Exception($"Book with {id} id could not found. ");
            }

            // OK 
            bookEntity.Title = book.Title;
            bookEntity.Price = book.Price;
            bookEntity.Summary = book.Summary;

            _bookRepository.Update(bookEntity);

            return Accepted(bookEntity);
        }

        [HttpGet("getlastestbook")]
        public IActionResult GetLastestBooks()
        {
            return Ok(_bookRepository.GetLastestBook());
        }
      
    }
}
