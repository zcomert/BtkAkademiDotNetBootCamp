# İçerik

- Inheritance
- Multi-level inheritence
- Interface
- Interface inheritance
- Entity Framework Core
  - DbContext
  - DbSet
  - Add-Migration
  - Update-Database

| Kavram              | Açıklama |
| ------------------- | -------- |
| **Add-Migration**   | ...      |
| **Update-Database** | ...      |

## Entity Framework Core Örnek Kod Parçası

```csharp
using Entities.Models;
using Repositories.Concrete;

var context = new AppDbContext();

var book = new Book() {
   Title = "Var mısın?",
   Price = 52,
   Summary = "Var mısın yok musun?"
};

context.Books.Add(book);
context.SaveChanges();

context
    .Books
    .ToList()
    .ForEach(b => Console.WriteLine(b));

Console.ReadKey();
```
