using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts
{
    public interface ICategoryService
    {
        List<Category> GetAllCategories(Expression<Func<Category, bool>> filter = null);
        Category GetOneCategory(int categoryId);

        Category CreateOneCategory(Category category);
        Category UpdateOneCategory(int categoryId, Category author);
        void DeleteOneCategory(int categoryId);
    }
}
