using Microsoft.EntityFrameworkCore;
using Repositories.Concrete;

namespace bsStoreApi.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureSqlConnection(this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(
                options => options.UseSqlServer(configuration.GetConnectionString("sqlConnection")));
        }
    }
}
