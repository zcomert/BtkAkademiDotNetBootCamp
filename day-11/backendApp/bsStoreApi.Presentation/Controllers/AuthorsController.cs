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
    [Route("api/authors")]
    public class AuthorsController : ControllerBase
    {
        // DI : Dependecy Injection
        private IAuthorService _authorService;
        public AuthorsController(IAuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet]
        public IActionResult GetAllAuthors()
        {
            return Ok(_authorService.GetAllAuthors());  
        }

        [HttpGet("{id:int}", Name ="GetOneAuthor")]
        public IActionResult GetOneAuthor([FromRoute(Name ="id")] int id)
        {
            return Ok(_authorService.GetOneAuthor(id));
        }

        [HttpPost]
        public IActionResult CreateOneAuthor([FromBody] Author author)
        {
            _authorService.CreateOneAuthor(author);
            return CreatedAtRoute("GetOneAuthor", new {id=author.AuthorId},author);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateOneAuthor([FromRoute(Name ="id")] int id, 
            [FromBody] Author author)
        {
            return Accepted(_authorService.UpdateOneAuthor(id, author));
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteOneAuthor([FromRoute(Name ="id")] int id)
        {
            _authorService.DeleteOneAuthor(id);
            return NoContent();
        }
    }
}
