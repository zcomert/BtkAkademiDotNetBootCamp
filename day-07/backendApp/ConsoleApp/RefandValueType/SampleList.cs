using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.RefandValueType
{
    public static class SampleList
    {

        public static void Run()
        {
            var list1 = new List<String>
{
    "Ahmet","Sade","Ömer Faruk"
};

            var list2 = list1;
            list2.Add("Burak");

            Console.WriteLine("\nList1");
            list1.ForEach(n => Console.WriteLine(n));

            Console.WriteLine("\nList2");
            list2.ForEach(n => Console.WriteLine(n));

            int a = 2;
            var b = a;
            b = 4;
            Console.WriteLine($"a={a} b={b}");

            Console.ReadKey();


        }
        public static void RunPointSampe()
        {
            var p1 = new Point() { X = 3, Y = 4 };

            Console.WriteLine(p1);

            var p2 = p1;
            p2.Y = 50;
            p2.X = 25;

            Console.WriteLine(p1);
        }
    }
}
