using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommunityController : ControllerBase
    {
        private readonly ICommunityMunicipalityService _communityMunicipalityService;

        public CommunityController(ICommunityMunicipalityService communityMunicipalityService)
        {
            _communityMunicipalityService = communityMunicipalityService ?? throw new ArgumentNullException(nameof(communityMunicipalityService));
        }

        [HttpGet]
        public ActionResult<Community> Get()
        {
            var all = _communityMunicipalityService.GetAll();
            var communitites = all
                .GroupBy(x => x.CommunityNumber)
                .Select(x => new Community
                {
                    Name = x.FirstOrDefault()?.CommunityName,
                    Number = x.Key,
                    Municipality = new Municipality
                    {
                        Name = x.FirstOrDefault()?.MunicipalityName,
                        Number = x.FirstOrDefault()?.MunicipalityNumber,
                        CommunityCount = x.FirstOrDefault()?.CountInMunicipality
                    }
                }).Distinct();

            return Ok(communitites);
        }

        [HttpGet("{communityNumber:regex(^[[0-9]]{{3,4}}$)}")]
        public ActionResult<Community> Get(int communityNumber)
        {
            var community = _communityMunicipalityService.GetCommunityByNumber(communityNumber);
            if (community == null)
                return NotFound();

            var result = new Community
            {
                Name = community.CommunityName,
                Number = community.CommunityNumber,
                Municipality = new Municipality
                {
                    Name = community.MunicipalityName,
                    Number = community.MunicipalityNumber,
                    CommunityCount = community.CountInMunicipality
                }
            };

            return Ok(result);
        }
        
        [HttpGet("Municipality/{municipalityNumber:int}")]
        public ActionResult<Community[]> GetByMunicipalityNumber(int municipalityNumber)
        {
            var communities = _communityMunicipalityService.GetCommunitiesByMunicipalityNumber(municipalityNumber);
            if (communities.Length == 0)
                return Ok(Array.Empty<Community>());

            var result = new List<Community>();
            foreach (var community in communities)
            {
                var c = new Community
                {
                    Name = community.CommunityName,
                    Number = community.CommunityNumber,
                    Municipality = new Municipality
                    {
                        Name = community.MunicipalityName,
                        Number = community.MunicipalityNumber,
                        CommunityCount = community.CountInMunicipality
                    }
                };
                result.Add(c);
            }

            return Ok(result);
        }
    }
}