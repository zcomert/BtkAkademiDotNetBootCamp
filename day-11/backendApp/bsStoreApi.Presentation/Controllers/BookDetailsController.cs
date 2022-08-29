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
    [Route("api/books/{id}/bookdetail")]
    public class BookDetailsController : ControllerBase
    {
        private readonly IBookDetailService _bookDetailService;

        public BookDetailsController(IBookDetailService bookDetailService)
        {
            _bookDetailService = bookDetailService;
        }

        [HttpGet("{bookId:int}")]
        public IActionResult GetBookDetailByBookId([FromRoute(Name ="bookId")] int bookId)
        {
            return Ok(_bookDetailService.GetOneBookDetail(bookId));
        }
 
    }
}
