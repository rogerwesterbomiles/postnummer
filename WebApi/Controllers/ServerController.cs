using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ServerController : ControllerBase
    {
        [HttpGet("metadata")]
        public IActionResult Get()
        {
            var location = GetType().Assembly.Location;
            var createdDate = System.IO.File.GetCreationTime(location);
            var lastWriteDate = System.IO.File.GetLastWriteTime(location);
            var lastAccessDate = System.IO.File.GetLastAccessTime(location);
            var version = GetType().Assembly.GetName().Version?.ToString();
            return Ok(new
            {
                version,
                createdDate,
                modifiedDate = lastWriteDate,
                lastAccessDate,
            });
        }
    }
}