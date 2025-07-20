using AppTrackr.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace AppTrackr.Server.Data
{
	public class TrackingContext : DbContext
	{
		public TrackingContext(DbContextOptions<TrackingContext> options) : base(options)
		{
		}

		public DbSet<ApplicationModel> Applications { get; set; }

	}
}
