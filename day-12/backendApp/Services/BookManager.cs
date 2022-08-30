using AutoMapper;
using Entities.Dtos;
using Entities.Exceptions;
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
    public class BookManager : IBookService
    {
        private readonly IBookRepository _bookRepository;
        private readonly ICategoryService _categoryService;
        private readonly IMapper _mapper;

        public BookManager(IBookRepository bookRepository, 
            ICategoryService categoryService, 
            IMapper mapper)
        {
            _bookRepository = bookRepository;
            _categoryService = categoryService;
            _mapper = mapper;
        }

        public Book CreateOneBook(BookDtoForInsertion bookDto)
        {
            if (bookDto is null)
            {
                throw new ArgumentNullException();
            }

            _categoryService.GetOneCategory(bookDto.CategoryId);
            
            var book = _mapper.Map<Book>(bookDto);
            
            _bookRepository.Add(book);
            return book;
        }

        public void DeleteOneBook(int id)
        {
            var book = GetOneBook(id);
            _bookRepository.Delete(book);
        }

        public List<Book> GetAllBooks(Expression<Func<Book, bool>> filter = null)
        {
            return _bookRepository.GetAll(filter);
        }

        public List<Book> GetAllBooksWithDetails()
        {
            return _bookRepository.GetAllBooksWithDetails();
        }

        public List<Book> GetLastestBook(int n)
        {
            return _bookRepository.GetLastestBook(n);
        }

        public Book GetOneBook(int id)
        {
            var book = _bookRepository.Get(b => b.Id == id);
            if (book is null)
            {
                throw new BookNotFoundException(id);
            }
            return book;
        }

        public Book UpdateOneBook(int id, Book book)
        {
            if(book.Id != id)
            {
                throw new Exception("Ids are not matched.");
            }

            var tobeUptatedBook = GetOneBook(id);

            tobeUptatedBook.Title = book.Title;
            tobeUptatedBook.Price = book.Price;
            tobeUptatedBook.Summary = book.Summary;

            _bookRepository.Update(tobeUptatedBook);
            return tobeUptatedBook;
        }
    }
}
