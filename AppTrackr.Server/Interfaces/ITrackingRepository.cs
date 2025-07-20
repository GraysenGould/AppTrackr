using AppTrackr.Server.Models;
namespace AppTrackr.Server.Interfaces
{
	public interface ITrackingRepository
	{
		public ApplicationModel GetApplicationById(int? applicationId);
		public void AddApplication(ApplicationModel Application);
		public List<ApplicationModel> GetAllApplications();
		public void AddSample();
		public void EditApplication(ApplicationModel application);
		public void DeleteApplication(int id);
	}
}
