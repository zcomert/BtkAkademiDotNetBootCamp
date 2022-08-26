using Microsoft.EntityFrameworkCore;
using Repositories.Concrete;
using Repositories.Contracts;
using Services;
using Services.Contracts;

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

        public static void RegisterToIoC(this IServiceCollection services)
        {
            services.AddScoped<IBookRepository, EfBookRepository>();
            services.AddScoped<IBookService, BookManager>();
            services.AddScoped<ICategoryRepository, EfCategoryRepository>();
            
            services.AddScoped<IAuthorRepository, EfAuthorRepository>();
            services.AddScoped<IAuthorService, AuthorManager>();
        }
    }
}

   
