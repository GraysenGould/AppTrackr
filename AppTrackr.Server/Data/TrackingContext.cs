﻿using AppTrackr.Server.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace AppTrackr.Server.Data
{
	public class TrackingContext : DbContext
	{
		//public TrackingContext(DbContextOptions<TrackingContext> options) : base(options)
		//{
		//}

		public DbSet<ApplicationModel> Applications { get; set; }

		protected override void OnConfiguring
			(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseInMemoryDatabase(databaseName: "TrackingDb");
		}
	}
}
