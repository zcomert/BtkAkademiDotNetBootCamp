using Entities.Models;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete
{
    public class EfCategoryRepository : ICategoryRepository
    {
        private readonly AppDbContext _context;

        public EfCategoryRepository(AppDbContext context)
        {
            _context = context;
        }

        public void CreateOneCategory(Category category)
        {
            _context.Categories.Add(category);  
            _context.SaveChanges();
        }

        public void DeleteOneCategory(Category category)
        {
            _context.Categories.Remove(category);
            _context.SaveChanges();
        }

        public List<Category> GetAllCategories()
        {
            return _context.Categories.ToList();
        }

        public Category GetOneCategory(int id)
        {
            return _context
                .Categories
                .Where(c => c.CategoryId == id)
                .FirstOrDefault(); 
        }

        public void UpdateOneCategory(int id, Category category)
        {
            var categoryEntity = GetOneCategory(id);
            categoryEntity = category;
            categoryEntity.CategoryId = id;
            _context.SaveChanges();
        }
    }
}
