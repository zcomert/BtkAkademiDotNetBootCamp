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
    var books = new List<Book>()
    {
        new Book()
        {
            Title = "Sosyoloji",
            Price = 40,
            Summary = "Sosyoloji orem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae porro tempora vitae distinctio deserunt quod rem esse ea, in quis nisi, cum unde harum aliquam possimus exercitationem dolor quas corrupti."
        },
        new Book()
        {
            Title = "C# Hakkında Herşey",
            Price = 50,
            Summary = "Sosyoloji orem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae porro tempora vitae distinctio deserunt quod rem esse ea, in quis nisi, cum unde harum aliquam possimus exercitationem dolor quas corrupti."
        },
        new Book()
        {
            Title = "Relational Database Management",
            Price = 150,
            Summary = "RDMS orem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae porro tempora vitae distinctio deserunt quod rem esse ea, in quis nisi, cum unde harum aliquam possimus exercitationem dolor quas corrupti."
        },
        new Book()
        {
            Title = "TCP/IP Protocol and OSI Layers",
            Price = 250,
            Summary = "TCP/IP orem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae porro tempora vitae distinctio deserunt quod rem esse ea, in quis nisi, cum unde harum aliquam possimus exercitationem dolor quas corrupti."
        },
        new Book()
        {
            Title = "Reactive Programming",
            Price = 350,
            Summary = "Reactive programming orem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae porro tempora vitae distinctio deserunt quod rem esse ea, in quis nisi, cum unde harum aliquam possimus exercitationem dolor quas corrupti."
        }
    };

    using (var context = new AppDbContext())
    {
        context.Books.AddRange(books);
        context.SaveChanges();
    }

    Console.WriteLine($"The number of books {books.Count} has been added.");
}

Console.ReadKey();