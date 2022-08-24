using Entities.Models;
using Repositories.Concrete;

var context = new AppDbContext();

AddBook();

context
    .Books
    .ToList()
    .ForEach(b => Console.WriteLine(b));

void AddBook()
{
    var book = new Book()
    {
        Title = "Kürk Mantolu Madonna",
        Price = 30,
        Summary = "Sebahattin Ali'nin bu kitabı..."
    };

    using (var context = new AppDbContext())
    {
        context.Books.Add(book);
        context.SaveChanges();
    }

    Console.WriteLine($"Book with {book.Title} has been added.");
}

Console.ReadKey();