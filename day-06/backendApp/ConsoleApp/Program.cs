using ConsoleApp;

Book book1 = new Book();
book1.Id = 1;
book1.Title = "Devlet";

Book book2 = new Book(2, "Kitab-ı Aşk");
Book book3 = new Book() { Id = 3, Title = "Mars" };

var book4 = new Book() { Id = 4, Title = "Yol" };


Console.WriteLine(book1);
Console.WriteLine(book2);
Console.WriteLine(book3);
Console.WriteLine(book4);

Console.ReadKey();
