using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MunicipalityController : ControllerBase
    {
        private readonly ICommunityMunicipalityService _communityMunicipalityService;

        public MunicipalityController(ICommunityMunicipalityService communityMunicipalityService)
        {
            _communityMunicipalityService = communityMunicipalityService ?? throw new ArgumentNullException(nameof(communityMunicipalityService));
        }

        [HttpGet]
        public ActionResult<Municipality> Get()
        {
            var all = _communityMunicipalityService.GetAll();
            var municipalities = all
                .GroupBy(x => x.MunicipalityNumber)
                .Select(x => new Municipality
                {
                    Name = x.FirstOrDefault()?.MunicipalityName,
                    Number = x.Key,
                    CommunityCount = x.FirstOrDefault()?.CountInMunicipality,
                }).Distinct();

            return Ok(municipalities);
        }

        [HttpGet("{municipalityNumber:int:minlength(1)}")]
        public ActionResult<Municipality> Get(int municipalityNumber)
        {
            var municipality = _communityMunicipalityService.GetMunicipalityByNumber(municipalityNumber);
            if (municipality == null)
                return NotFound();

            var result = new Municipality
            {
                Name = municipality.MunicipalityName,
                Number = municipality.MunicipalityNumber,
                CommunityCount = municipality.CountInMunicipality,
            };

            return Ok(result);
        }
    }
}