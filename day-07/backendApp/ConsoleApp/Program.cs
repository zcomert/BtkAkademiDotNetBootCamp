
using ConsoleApp.Interface;

var stack = new ConsoleApp
    .Interface
    .Stack<int>(new StackList<int>());

stack.Push(25);
stack.Push(55);
stack.Push(61);
stack.Push(28);
stack.Push(60);

Console.WriteLine(stack.Peek());


Console.ReadKey();