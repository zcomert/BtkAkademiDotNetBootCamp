using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Interface
{
    public interface IStack<T>
    {
        void Push(T item);  // method imzası /method signature
        T Pop();
        T Peek();
    }

}
