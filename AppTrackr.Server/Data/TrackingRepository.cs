using AppTrackr.Server.Interfaces;
using AppTrackr.Server.Models;
using System;
using static System.Net.Mime.MediaTypeNames;
namespace AppTrackr.Server.Data
{
	public class TrackingRepository : ITrackingRepository
	{

		private TrackingContext _trackingContext;
		public TrackingRepository(TrackingContext trackingContext)
		{
			_trackingContext = trackingContext;
		}
		public ApplicationModel GetApplicationById(int? applicationId)
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

		public void EditApplication(ApplicationModel application)
		{
			var appEntry = _trackingContext.Applications.Find(application.Id);

			if (appEntry != null)
			{
				_trackingContext.Entry(appEntry).CurrentValues.SetValues(application);
				_trackingContext.SaveChanges();

			}
			else
			{
				throw new Exception($"Id: {application.Id} could not be found in the database");
			}

		}

		public void DeleteApplication(int id)
		{
			var appEntry = _trackingContext.Applications.Find(id);

			if (appEntry != null)
			{
				_trackingContext.Applications.Remove(appEntry);
				_trackingContext.SaveChanges();
			}
			else
			{
				throw new Exception($"Id: {id} could not be found in the database");
			}
		}

		public void AddSample()
		{
			var applications = new List<ApplicationModel>
				{
					new ApplicationModel
					{
						Id = 1,
						Company = "NVIDIA",
						ApplicationDate = new DateTime(),
						Status = "Waiting"
					},
					new ApplicationModel
					{
						Id = 2,
						Company = "Amazon",
						ApplicationDate = new DateTime(),
						Status = "In Progress"
					}
				};
			_trackingContext.Applications.AddRange(applications);
			_trackingContext.SaveChanges();
		}
	}
}
