using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Contracts
{
    public interface IEntityRepository<T>
        where T:class
    {
        // C : Create
        // R : Retrieve / Read
        // U : Update
        // D : Delete
       
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        List<T> GetAll();
        T Get();
    }
}
