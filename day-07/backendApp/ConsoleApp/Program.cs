// ADT: Abstract data type
using ConsoleApp.Interface;

// Zafer
var stack = new ConsoleApp
    .Interface
    .Stack<char>(new StackLinkedList<char>());

"zafer".ToList()
    .ForEach(c => stack.Push(c));

int indx = "zafer".Length;
while (indx > 0)
{
    Console.Write($"{stack.Pop(),-4}");
    indx--;
}


Console.ReadKey();