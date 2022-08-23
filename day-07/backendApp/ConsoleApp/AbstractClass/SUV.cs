namespace ConsoleApp.AbstractClass
{
    public class SUV : Car
    {
        public override void StartEnginee()
        {
            Console.WriteLine("SUV starts engine...");
        }

        public override void StopEnginee()
        {
            Console.WriteLine("SUV stops engine...");
        }
    }
}
