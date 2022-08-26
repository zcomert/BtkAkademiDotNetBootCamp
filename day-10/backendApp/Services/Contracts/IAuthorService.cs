using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Contracts
{
    public interface IAuthorService
    {
        List<Author> GetAllAuthors(Expression<Func<Author,bool>> filter=null);
        Author GetOneAuthor(int id);

        Author CreateOneAuthor(Author author);
        Author UpdateOneAuthor(int authorId, Author author);
    }
}
