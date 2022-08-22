using ConsoleApp;

public class Practice
{
    public void ArrayDefination()
    {
        var BookArr =
        new Book[] {
        new Book(1,"Devlet"),
        new Book(){Id = 2, Title = "Yoldaki İşaretler"},
        new Book { Id=3, Title = "C# Hakkında Herşey"}
        };

        for (int i = 0; i < BookArr.Length; i++)
        {
            Console.WriteLine(BookArr[i]);
        }

        BookArr[1].Id = 30;
        BookArr[1].Title = "Mars";

        Console.WriteLine();
        foreach (var book in BookArr)
        {
            Console.WriteLine(book);
        }

        // mutable (değişebilir) -  immutable (değişemez)

        var newBookArr = new Book[5];

        for (int i = 0; i < BookArr.Length; i++)
        {
            newBookArr[i] = BookArr[i];
        }
        newBookArr[3] = new Book(4, "Sınırsız Güç");
        newBookArr[4] = new Book(5, "Dijital Kale");

        foreach (var item in newBookArr)
        {
            Console.WriteLine(item);
        }

        Console.ReadKey();
    }
}