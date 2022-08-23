using ConsoleApp.Inheritance;

var shape1 = new Shape() { X = 3, Y = 4 };
var shape2 = new Rectangle { X = 30, Y = 40 };
var shape3 = new Circle { X = -4, Y = -8 };

shape1.Draw();
shape2.Draw();
shape3.Draw();

Console.ReadKey();