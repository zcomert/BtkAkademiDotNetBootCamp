using System.ComponentModel.DataAnnotations;

namespace Entities.Dtos
{
    // BookDtoForInsertion -> Book
    public record UserForRegistrationDto
    {
        public String? FirstName { get; init;}
        public String? LastName { get; init; }
        
        [Required(ErrorMessage = "Username is required")]
        public String? UserName { get; init; }

        [Required(ErrorMessage = "Password is required")]
        public String? Password { get; init; }
        public string? Email { get; init; }
        public string? PhoneNumber { get; init; }
        public ICollection<string>? Roles { get; init; }
    }

}
