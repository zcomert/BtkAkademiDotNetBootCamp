using Microsoft.EntityFrameworkCore;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete
{
    public abstract class EfBaseRepository<T> : IEntityRepository<T>
        where T : class
    {
        protected readonly AppDbContext _context;

        public EfBaseRepository(AppDbContext context)
        {
            _context = context;
        }

        public void Add(T entity)
        {
            _context.Entry(entity).State = EntityState.Added;
            _context.SaveChanges();
        }

        public void Delete(T entity)
        {
            _context.Entry(entity).State = EntityState.Deleted;
            _context.SaveChanges();
        }

        public T Get(Expression<Func<T, bool>> filter)
        {
            return _context
                .Set<T>()
                .Where(filter) 
                .SingleOrDefault();
        }

        public List<T> GetAll(Expression<Func<T, bool>> filter = null)
        {
            return filter is null ?
                _context.Set<T>().ToList() :
                _context.Set<T>().Where(filter).ToList();
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
