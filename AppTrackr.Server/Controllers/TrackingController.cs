using Microsoft.AspNetCore.Mvc;
using AppTrackr.Server.Models;

namespace AppTrackr.Server.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class TrackingController : ControllerBase
	{

		private readonly ILogger<TrackingController> _logger;

		public TrackingController(ILogger<TrackingController> logger)
		{
			_logger = logger;
		}

		[HttpPost("create")]
		public IActionResult PostApplication([FromBody] ApplicationModel app)
		{
			Console.WriteLine($"Company Name: {app.Company}");
			return Ok();
		}



		[HttpGet("view-all")]
		public IEnumerable<ApplicationModel> Get()
		{
			var newList = new List<ApplicationModel>
			{
				new ApplicationModel()
				{
					Id = 1,
					Status = "filled"
				}
			};
			return newList;
		}
	}
}
