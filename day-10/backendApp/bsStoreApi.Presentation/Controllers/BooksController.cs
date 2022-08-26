using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bsStoreApi.Presentation.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public IActionResult GetAllBooks()
        {
            return Ok(_bookService.GetAllBooks());
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOneBook([FromRoute(Name ="id")] int id)
        {
            var book = _bookService.GetOneBook(id);
            return Ok(book);
        }

        [HttpPost]
        public IActionResult CreateOneBook([FromBody] Book book)
        {
            _bookService.CreateOneBook(book);
            return Ok(book);
        }

        //[HttpDelete("{id:int}")]
        //public IActionResult DeleteOneBook([FromRoute] int id)
        //{
        //    var book = _bookService.Get(b => b.Id == id);

        //    if (book is null)
        //    {
        //        throw new Exception($"Book with {id} could not found!");
        //    }

        //    _bookService.Delete(book);
        //    return NoContent();
        //}

        //[HttpPut("{id:int}")]
        //public IActionResult UpdateOneBook([FromRoute] int id,
        //    [FromBody] Book book)
        //{
        //    if (id != book.Id)
        //        throw new Exception("Ids are not matched.");

        //    var bookEntity = _bookService.Get(b => b.Id == id);


        //    if (bookEntity is null)
        //    {
        //        throw new Exception($"Book with {id} id could not found. ");
        //    }

        //    // OK 
        //    bookEntity.Title = book.Title;
        //    bookEntity.Price = book.Price;
        //    bookEntity.Summary = book.Summary;

        //    _bookService.Update(bookEntity);

        //    return Accepted(bookEntity);
        //}

        //[HttpGet("getlastestbook")]
        //public IActionResult GetLastestBooks()
        //{
        //    return Ok(_bookService.GetLastestBook());
        //}

    }
}
