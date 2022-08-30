using Entities.Models;
using Repositories.Contracts;
using Services.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class CategoryManager : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryManager(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public Category CreateOneCategory(Category category)
        {
           if(category is null)
            {
                throw new ArgumentNullException("Category is null!");
            }
           _categoryRepository.Add(category);
            return category;
        }

        public void DeleteOneCategory(int categoryId)
        {
            var category = GetOneCategory(categoryId);  
            _categoryRepository.Delete(category);
        }

        public List<Category> GetAllCategories(Expression<Func<Category, bool>> filter = null)
        {
            return _categoryRepository.GetAll(filter);
        }

        public Category GetOneCategory(int categoryId)
        {
            var category = _categoryRepository.Get(c => c.CategoryId == categoryId);
            if(category is null)
            {
                throw new Exception("Category could not found.");
            }
            return category;
        }

        public Category UpdateOneCategory(int categoryId, Category category)
        {
            if(categoryId != category.CategoryId)
            {
                throw new ArgumentException("Ids could not be matched.");
            }

            var categoryEntity = GetOneCategory(categoryId);

            categoryEntity.CategoryName = category.CategoryName;
            categoryEntity.Description = category.Description;
            _categoryRepository.Update(categoryEntity);
            return categoryEntity;
        }
    }
}
