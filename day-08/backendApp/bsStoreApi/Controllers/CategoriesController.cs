using Microsoft.AspNetCore.Mvc;
using Repositories.Concrete;

namespace bsStoreApi.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoriesController : ControllerBase
    {
        private AppDbContext _context;
        public CategoriesController()
        {
            _context = new AppDbContext();
        }
        
        [HttpGet]
        public IActionResult GetAllCategories()
        {
            return Ok(_context.Categories?.ToList());
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOneCategory([FromRoute] int id)
        {
            var category = _context
                .Categories?
                .Where(c => c.CategoryId == id)
                .SingleOrDefault();

            if (category is null)
                throw new Exception("Category not found.");

            return Ok(category);
        }
    }
}
