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
    public class AuthorManager : IAuthorService
    {
        private readonly IAuthorRepository _authorRepository;

        public AuthorManager(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public Author CreateOneAuthor(Author author)
        {
           if(author is null)
            {
                throw new ArgumentNullException("Author is empty.");
            }
           _authorRepository.Add(author);
            return author;
        }

        public List<Author> GetAllAuthors(Expression<Func<Author, bool>> filter = null)
        {
            return _authorRepository.GetAll(filter);
        }

        public Author GetOneAuthor(int id)
        {
            var author = _authorRepository.Get(a => a.AuthorId == id);
            if (author is null)
            {
                throw new Exception("Author could not found.");
            }
            return author;
        }

        public Author UpdateOneAuthor(int authorId, Author author)
        {
            if (authorId != author.AuthorId)
            {
                throw new Exception("Ids could not be matched.");
            }

            var authorTobeUpdated = GetOneAuthor(authorId);
        }
    }
}
