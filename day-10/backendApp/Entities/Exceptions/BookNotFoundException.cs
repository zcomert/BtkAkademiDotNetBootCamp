namespace Entities.Exceptions
{
    public class BookNotFoundException : NotFoundException
    {
        public BookNotFoundException(int id) : 
            base($"Book with {id} could not found.")
        {

        }
    }
}
