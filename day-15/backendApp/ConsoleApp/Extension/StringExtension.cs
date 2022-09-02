using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Extension
{
    public static class StringExtension
    {
        public static int NumberOfWord(this String expression, String s)
        {
            int c = 0;
            foreach (char item in s)
            {
                if (item == ' ')
                    c = c + 1;
            }
            return c + 1;
        }
    }
}
