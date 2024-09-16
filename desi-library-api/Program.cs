using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

// Defining local CORS rules
var corsPolicy = "_AllowLocalOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsPolicy,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173", 
                                             "http://localhost:5000")
                                .WithMethods("GET", "POST", "PUT", "DELETE")
                                .WithHeaders(HeaderNames.ContentType, "content-type");
                      });
});

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

app.UseCors(corsPolicy);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
