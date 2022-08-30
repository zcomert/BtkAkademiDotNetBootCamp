# İçerik

- ASP.NET Core 
- Project templates
- Object Oriented Programming (OOP)
- Class
- Field
- Property
  - prop
  - propfull
- Auto-implemented property
- Constructor
- Constructor overloading
- Object
- override
- ToString()
- ArrayList
- List<T>
- WebApi
- Controllers

| Kavram | Açıklama |
| ------ | -------- |
| ****   | ...      |


## BooksController Class için tanımlamalar 

```csharp
[HttpGet]
        public List<Book> GetAllBooks()
        {
            var bookList = new List<Book>()
            {
                new Book() {  Id =1, Title="Book 1", Price = 50, Summary="..."},
                new Book() {  Id =2, Title="Book 2", Price = 150, Summary="..."}
            };
            return bookList;
        }
```
[Backend Roodmap](https://raw.githubusercontent.com/Elfocrash/.NET-Backend-Developer-Roadmap/master/Backend-.NET-Developer-Roadmap-2022.png)