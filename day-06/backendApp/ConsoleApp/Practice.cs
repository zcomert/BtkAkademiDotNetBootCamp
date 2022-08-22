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

    public void UseMathInProgram()
    {
        var math = new ConsoleApp.Math.Math();

        var c = math.Sum(3, 5);
        Console.WriteLine(typeof(ConsoleApp.Math.Math).FullName);
        Console.WriteLine(c.GetType());
        Console.WriteLine(c);


        var d = math.Multipy(c, 2); // 16 
        Console.WriteLine($"{c}*2 = {d}");

        var e = math.Subtraction(d + 10, c); // 16+10 - 8 = 18
        Console.WriteLine($"{d + 10}-{c} = {e}");
    }

    public void UseParamsKeyword()
    {
        var math = new ConsoleApp.Math.Math();
        Console.WriteLine(math.Sum(1, 3));                      // 4
        Console.WriteLine(math.Sum(10));                        // 10
        Console.WriteLine(math.Sum(1, 3, 4, 5));                // 13
        Console.WriteLine(math.Sum(1, 3, 4, 5, 10, 30));        // 53
    }
}