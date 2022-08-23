using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp.AbstractClass
{
    public abstract class Car : IComparable
    {
        public int Id { get; set; }
        public String? Brand { get; set; }
        public String? Model { get; set; }
        public int Year { get; set; }

        public abstract void StartEnginee();
        public abstract void StopEnginee();

        public virtual void OpenLight()
        {
            Console.WriteLine("Light is open.");
        }

        public override string ToString()
        {
            return $"{Brand,-15} {Model,-15} {Year,8}";
        }

        public int CompareTo(object? obj)
        {
            // 0 eşit
            // -1 küçük
            // +1 büyük
            var other = obj as Car;  // CAST // unboxing

            if(obj is null)
            {
                throw new NullReferenceException("Obj is not Car.");
            }

            //if (this.Year > other.Year)
            //    return 1;
            //else if (this.Year == other.Year)
            //    return 0;
            //else
            //    return -1;   

            // return this.Year.CompareTo(other?.Year);
            return this.Brand.CompareTo(other.Brand);
        }
    }
}
