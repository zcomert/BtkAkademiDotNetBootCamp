using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.Concrete.Config
{
    public partial class AuthorConfig
    {
        public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
        {
            public void Configure(EntityTypeBuilder<IdentityRole> builder)
            {
                builder.HasData(
                    new IdentityRole
                    {
                        Name = "Manager",
                        NormalizedName = "MANAGER"
                    },
                    new IdentityRole
                    {
                        Name = "Administrator",
                        NormalizedName = "ADMINISTRATOR"
                    }
                    );
            }
        }
    }
}
