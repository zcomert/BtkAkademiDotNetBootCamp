using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Math
{
    public class Math
    {
        public int Sum(params int[] numbers)
        {
            int acc = 0;
            foreach (var item in numbers)
                acc += item;
            return acc;
        }
        public int Sum(int a, int b )
        {
            return a + b;
        }

        public int Multipy(int a, int b) =>  a * b;

        public int Divide(int a, int b) => a / b;

        public int Subtraction(int a, int b)
        {
            return a - b;
        } 



    }
}
