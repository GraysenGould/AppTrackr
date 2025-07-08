using AppTrackr.Server.Models;
namespace AppTrackr.Server.Interfaces
{
	public interface ITrackingRepository
	{
		public ApplicationModel GetApplication(int applicationId);
		public void SetApplication(ApplicationModel Application);
	}
}
