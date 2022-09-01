using ConsoleApp.AbstractClass;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Inheritance
{
    public class SampleInterface
    {
        public static void Run()
        {
            var carList = new List<Car>
            {
                new Cabrio(){Brand="BMW", Model = "525", Year = 2022},
                new SUV(){ Brand="Mercedes", Model = "GLC", Year = 2020},
                new SUV(){ Brand="Audi", Model = "Q7", Year = 2019},
                new Cabrio(){ Brand="Porsche", Model = "911 Carrea", Year = 2018}
            };
            carList.Sort();
            carList.ForEach(c => Console.WriteLine(c));
        }
    }
}
