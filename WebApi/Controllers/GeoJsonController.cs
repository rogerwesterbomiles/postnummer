using System;
using System.IO;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using WebApi.Types;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GeoJsonController : ControllerBase
    {
        [HttpGet("municipality/{mapSize}")]
        public IActionResult GetMunicipalityMedium(MapSize mapSize)
        {
            if (mapSize == MapSize.Unknown)
                return BadRequest();

            string fileName = "Fylker-";
            fileName += mapSize switch
            {
                MapSize.Small => "small",
                MapSize.Medium => "medium",
                MapSize.Large => "large",
                _ => "small"
            };
            fileName += ".json";
            
            try
            {
                var fileContent = GetFileContent(fileName);
                return Ok(fileContent);
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
        
        [HttpGet("community/{mapSize}")]
        public IActionResult GetCommunityMedium(MapSize mapSize)
        {
            if (mapSize == MapSize.Unknown)
                return BadRequest();

            string fileName = "Kommuner-";
            fileName += mapSize switch
            {
                MapSize.Small => "small",
                MapSize.Medium => "medium",
                MapSize.Large => "large",
                _ => "small"
            };
            fileName += ".json";
            
            try
            {
                var fileContent = GetFileContent(fileName);
                return Ok(fileContent);
            }
            catch (Exception)
            {
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        private string GetFileContent(string fileName)
        {
            var assemblyFolder = AppDomain.CurrentDomain.BaseDirectory;
            var filePath = Path.Combine(assemblyFolder, "./Data/Norge/2020/geojson", fileName);
            var fileContent = System.IO.File.ReadAllText(filePath);
            return fileContent;
        }
    }
}