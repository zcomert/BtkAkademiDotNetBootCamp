using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Inheritance
{
    public class Rectangle : Shape
    {
        public override void Draw()
        {
            Console.WriteLine("Rectange is drawing...");
        }
    }
}
