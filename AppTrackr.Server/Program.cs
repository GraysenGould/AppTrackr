namespace AppTrackr.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

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
    }
}
