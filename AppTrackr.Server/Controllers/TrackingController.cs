using Microsoft.AspNetCore.Mvc;
using AppTrackr.Server.Models;
using AppTrackr.Server.Interfaces;

namespace AppTrackr.Server.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class TrackingController : ControllerBase
	{

		private readonly ILogger<TrackingController> _logger;
		private ITrackingRepository _trackingRepository;

		public TrackingController(ITrackingRepository trackingRepository, ILogger<TrackingController> logger)
		{
			_logger = logger;
			_trackingRepository = trackingRepository;
		}

		[HttpPost("create")]
		public IActionResult PostApplication([FromBody] ApplicationModel application)
		{
			_trackingRepository.AddApplication(application);
			Console.WriteLine($"Company Name: {application.Company}");
			return Ok();
		}



		[HttpGet("view-all")]
		public IEnumerable<ApplicationModel> GetAllApplications()
		{
			var allApplications = _trackingRepository.GetAllApplications();
			//Console.WriteLine($"all applications: ${allApplications[0].Company}");
			return allApplications;
		}
	}
}
