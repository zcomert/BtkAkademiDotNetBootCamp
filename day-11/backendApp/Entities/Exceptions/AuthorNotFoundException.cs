namespace Entities.Exceptions
{
    public class AuthorNotFoundException : NotFoundException
    {
        public AuthorNotFoundException(int id)
            : base($"Author with {id} id could not found.")
        {

        }
    }
}
