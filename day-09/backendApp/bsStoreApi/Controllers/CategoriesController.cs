using Microsoft.AspNetCore.Mvc;
using Repositories.Concrete;
using Repositories.Contracts;

namespace bsStoreApi.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoriesController(ICategoryRepository context)
        {
            _categoryRepository = context;
        }

        [HttpGet]
        public IActionResult GetAllCategories()
        {
            return Ok(_categoryRepository.GetAllCategories());
        }

        [HttpGet("{id:int}")]
        public IActionResult GetOneCategory([FromRoute] int id)
        {
            var category = _categoryRepository
                .GetOneCategory(id);

            if (category is null)
                throw new Exception("Category not found.");

            return Ok(category);
        }
    }
}
