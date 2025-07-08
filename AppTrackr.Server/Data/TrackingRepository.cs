using AppTrackr.Server.Interfaces;
using AppTrackr.Server.Models;
using System;
namespace AppTrackr.Server.Data
{
	public class TrackingRepository : ITrackingRepository
	{

		public TrackingRepository()
		{
			using (var context = new TrackingContext())
			{
				var applications = new List<ApplicationModel>
				{
					new ApplicationModel
					{
						Id = 1,
						Company = "NVIDIA",
						ApplicationDate = "01-01-2025",
						Status = "Waiting"
					},
					new ApplicationModel
					{
						Id = 2,
						Company = "Amazon",
						ApplicationDate = "02-01-2025",
						Status = "In Progress"
					}
				};
				context.Applications.AddRange(applications);
				context.SaveChanges();
			}
		}
		public ApplicationModel GetApplication(int applicationId)
		{
			using (var context = new TrackingContext())
			{
				var application = context.Applications.FirstOrDefault(app => app.Id == applicationId);

				if (application == null)
				{
					throw new Exception("ID not found in database");
				}
				else
				{
					return application;
				}
			}
		}
		public void SetApplication(ApplicationModel Application)
		{
			using (var context = new TrackingContext())
			{
				if (Application == null || Application.Id == null) 
				{
					throw new Exception("Application is Null");
				}
				context.Applications.Add(Application);
				context.SaveChanges();
			}
		}
	}
}
