using Microsoft.EntityFrameworkCore;
using Repositories.Concrete;
using Repositories.Contracts;
using Services;
using Services.Contracts;

namespace bsStoreApi.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureCors(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder =>
                builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());
            });
        }
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

            services.AddScoped<IBookDetailRepository, EfBookDetailRepository>();
            services.AddScoped<IBookDetailService, BookDetailManager>();
            
            services.AddScoped<ICategoryRepository, EfCategoryRepository>();
            services.AddScoped<ICategoryService, CategoryManager>();
            
            services.AddScoped<IAuthorRepository, EfAuthorRepository>();
            services.AddScoped<IAuthorService, AuthorManager>();
        }
    }
}

   
