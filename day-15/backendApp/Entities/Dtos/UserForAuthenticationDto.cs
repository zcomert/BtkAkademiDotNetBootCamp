using System.ComponentModel.DataAnnotations;

namespace Entities.Dtos
{
    public class UserForAuthenticationDto
    {
        [Required(ErrorMessage = "User name is required")]
        public string? UserName { get; init; }

        [Required(ErrorMessage = "Password name is required")]
        public string? Password { get; init; }
    }

    // BookDtoForInsertion -> Book
}
