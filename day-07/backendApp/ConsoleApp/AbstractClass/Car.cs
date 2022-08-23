using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.AbstractClass
{
    public abstract class Car
    {
        public int Id { get; set; }
        public String? Brand { get; set; }
        public String? Model { get; set; }
        public int Year { get; set; }

        public abstract void StartEnginee();
        
    }
}
