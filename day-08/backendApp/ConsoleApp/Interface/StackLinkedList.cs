using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Interface
{
    public class StackLinkedList<T> : IStack<T>
    {
        private LinkedList<T> list;
        public StackLinkedList()
        {
            list = new LinkedList<T>();
        }

        public T Peek() => list.Count > 0
            ? list.Last.Value
            : throw new Exception("No more item in the stack.");
        

        public T Pop()
        {
            if(list.Count>0)
            {
                var temp = list.Last;
                list.RemoveLast();
                return temp.Value;
            }
            throw new Exception("No more item in the stack!");
        }

        public void Push(T item)
        {
            list.AddLast(item);
        }
    }
}
