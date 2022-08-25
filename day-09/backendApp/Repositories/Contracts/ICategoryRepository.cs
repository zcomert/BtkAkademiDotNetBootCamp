using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Contracts
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCategories();
        Category GetOneCategory(int id);
        void CreateOneCategory(Category category);
        void UpdateOneCategory(int id, Category category);
        void DeleteOneCategory(Category category);
    }
}
