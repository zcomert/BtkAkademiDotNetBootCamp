using bsStoreApi.Extensions;
using Microsoft.EntityFrameworkCore;
using Repositories.Concrete;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(opt =>
                opt.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles)
    .AddApplicationPart(typeof(bsStoreApi.Presentation.AssemblyReference).Assembly);


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.ConfigureSqlConnection(builder.Configuration);
builder.Services.RegisterToIoC();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.ConfigureExceptionHandler();

app.UseAuthorization();

app.MapControllers();

app.Run();
