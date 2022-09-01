namespace ConsoleApp.Interface
{
    public class Stack<T> : IStack<T>
    {
        private readonly IStack<T> _stack;

        public Stack(Interface.IStack<T> stack)
        {
            _stack = stack;
        }

        public T Peek() => _stack.Peek();


        public T Pop() => _stack.Pop();


        public void Push(T item) => _stack.Push(item);
        
    }

}
