using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.Interface
{
    public class StackList<T> : IStack<T>
    {
        private List<T> list;
        public StackList()
        {
            list = new List<T>();
        }
        public T Peek() => list.Count > 0
            ? list[list.Count - 1]
            : throw new Exception("There is no more item");
        

        public T Pop()
        {
            if(list.Count>0)
            {
                var temp = list[list.Count - 1];
                list.RemoveAt(list.Count - 1);
                return temp;
            }
            throw new Exception("There is no more item to remove.");
        }

        public void Push(T item)
        {
            list.Add(item);
        }
    }
}
