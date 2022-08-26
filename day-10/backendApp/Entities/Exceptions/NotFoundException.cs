using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(String message) : base(message)
        {

        }
    }

    public class AuthorNotFoundException : NotFoundException
    {
        public AuthorNotFoundException(int id)
            : base($"Author with {id} id could not found.")
        {

        }
    }
}
