using Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Repositories.Contracts;
using Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bsStoreApi.Presentation.Controllers
{
    [ApiController]
    [Route("api/categories")]
    [Authorize]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            return Ok(_categoryService.GetAllCategories());
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOneCategory([FromRoute(Name = "id")] int id)
        {
            return Ok(_categoryService.GetOneCategory(id));
        }

        [HttpPost]
        public IActionResult CreateOneCategory([FromBody] Category category)
        {
            return Ok(_categoryService.CreateOneCategory(category));
        }


        [HttpPut("{id:int}")]
        public IActionResult UpdateOneCategory([FromRoute(Name = "id")] int id,
            [FromBody] Category category)
        {
            return Accepted(_categoryService.UpdateOneCategory(id, category));
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteOneCategory([FromRoute(Name = "id")] int id)
        {
            _categoryService.DeleteOneCategory(id);
            return NoContent();
        }
    }
}
