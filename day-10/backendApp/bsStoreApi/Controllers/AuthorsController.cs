using Microsoft.AspNetCore.Mvc;
using Repositories.Contracts;

namespace bsStoreApi.Controllers
{
    [ApiController]
    [Route("api/authors")]
    public class AuthorsController : ControllerBase
    {
        private readonly IAuthorRepository _authorRepository;

        public AuthorsController(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        [HttpGet]
        public IActionResult GetAllAuthors()
        {
            return Ok(_authorRepository.GetAll());
        }
    }
}
