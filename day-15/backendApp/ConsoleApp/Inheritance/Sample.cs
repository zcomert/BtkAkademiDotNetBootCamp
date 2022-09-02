using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Inheritance
{
    public class Sample
    {
        public static void Run()
        {
            var list = new List<Shape>()
            {
                new Shape() { X = 3, Y = 4 },
                new Rectangle { X = 30, Y = 40 },
                new Circle { X = -4, Y = -8 },
                new Triangle { X = 40, Y = 50 },
                new Square() { X = 4, Y = 4 }
            };

            list.ForEach(shp => shp.Draw());
        }
    }
}
