using AppTrackr.Server.Interfaces;
using AppTrackr.Server.Models;
using System;
namespace AppTrackr.Server.Data
{
	public class TrackingRepository : ITrackingRepository
	{

		private TrackingContext _trackingContext;
		public TrackingRepository(TrackingContext trackingContext)
		{
			_trackingContext = trackingContext;
		}
		public ApplicationModel GetApplicationById(int applicationId)
		{
			var application = _trackingContext.Applications.FirstOrDefault(app => app.Id == applicationId);

			if (application == null)
			{
				throw new Exception("ID not found in database");
			}
			else
			{
				return application;
			}
		}

		public List<ApplicationModel> GetAllApplications()
		{
			var applications = _trackingContext.Applications.ToList();

			if (applications == null)
			{
				throw new Exception("Error retreiving applications");
			}
			else
			{
				return applications;
			}
		}

		public void AddApplication(ApplicationModel Application)
		{

			if (Application == null || Application.Id == null)
			{
				throw new Exception("Application is Null");
			}
			_trackingContext.Applications.Add(Application);
			_trackingContext.SaveChanges();
		}

		public void AddSample()
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
			_trackingContext.Applications.AddRange(applications);
			_trackingContext.SaveChanges();
		}
	}
}
