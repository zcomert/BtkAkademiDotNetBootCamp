
using ConsoleApp;
using System.Collections;

var bookList = new ArrayList();

bookList.Add(new Book(1, "Book 1"));
bookList.Add(new Book(2, "Book 2"));
bookList.Add(new Book(3, "Book 3"));
bookList.Add("Ömer");
bookList.Add(true);
bookList.Add(DateTime.Now);
bookList.Add(25);
bookList.Add(5 / 2);

bookList.AddRange(new int[] { 1, 2, 3 });

Console.WriteLine(String.Format("Number of item in collection : {0}",bookList.Count));

foreach (var item in bookList)
{
    Console.WriteLine(item);
}

bookList.Remove(true);
bookList.RemoveAt(0);
bookList.RemoveRange(0, 3);
Console.WriteLine(String.Format("Number of item in collection : {0}", bookList.Count));

foreach (var item in bookList)
{
    Console.WriteLine(item);
}
Console.ReadKey();











//var practice = new Practice();
//practice.ArrayDefination();
//practice.UseMathInProgram();
//practice.UseParamsKeyword();
