using AppTrackr.Server.Data;
using AppTrackr.Server.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace AppTrackr.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

			// Add database
			var connectionString = GetConnectionString(builder);

			builder.Services.AddDbContext<TrackingContext>(options =>
					options.UseSqlite(connectionString));

			builder.Services.AddScoped<ITrackingRepository, TrackingRepository>();



            builder.Services.AddControllers();

			builder.Services.AddCors(options =>
			{
				options.AddPolicy("AllowAll", policy =>
				{
					policy
						.AllowAnyOrigin()
						.AllowAnyHeader()
						.AllowAnyMethod();
				});
			});

			var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

			app.UseCors("AllowAll");

			app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }

		private static string GetConnectionString(WebApplicationBuilder builder)
		{
			var folder = Environment.SpecialFolder.LocalApplicationData;
			var path = Environment.GetFolderPath(folder);
			var DbPath = System.IO.Path.Join(path, "apptracker.db");

			var rawConnectionString = builder.Configuration.GetConnectionString("DefaultConnection");

			if (rawConnectionString != null)
			{
				return string.Format(rawConnectionString, DbPath);
			}
			else
			{
				throw new Exception("DB Connection String Could not be determined");
			}

		}
	}
}
