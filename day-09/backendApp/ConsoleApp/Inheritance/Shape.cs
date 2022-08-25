using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Inheritance
{
    public class Shape
    {
        public int X { get; set; }
        public int Y { get; set; }

        public virtual void Draw()
        {
            Console.WriteLine("Shape drawing...");
        }
    }
}
