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

		[HttpGet("view-all/{id?}")]
		public IEnumerable<ApplicationModel> GetAllApplications(int? id)
		{
			if (id == null)
			{
				var allApplications = _trackingRepository.GetAllApplications();
				//Console.WriteLine($"all applications: ${allApplications[0].Company}");
				return allApplications;
			}
			else
			{
				var allApplications = new List<ApplicationModel>();
				allApplications.Add(_trackingRepository.GetApplicationById(id));
				return allApplications;
			}

		}


		[HttpPut("edit/{id?}")]
		public IActionResult EditApplication([FromBody] ApplicationModel application)
		{
			_trackingRepository.EditApplication(application);
			return Ok();
		}

		[HttpDelete("delete/{id?}")]
		public IActionResult DeleteApplication(int id)
		{
			_trackingRepository.DeleteApplication(id);
			return Ok();
		}
	}
}
