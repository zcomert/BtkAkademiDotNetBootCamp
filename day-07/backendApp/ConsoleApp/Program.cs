using Entities.Models;
using Repositories.Concrete;

var context = new AppDbContext();

//var book = new Book() { 
//    Title = "Var mısın?",
//    Price = 52,
//    Summary = "Var mısın yok musun?"
//};

//context.Books.Add(book);
//context.SaveChanges();

context
    .Books
    .ToList()
    .ForEach(b => Console.WriteLine(b));

Console.ReadKey();