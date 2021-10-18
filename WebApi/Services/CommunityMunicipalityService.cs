using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Services
{
    public class CommunityMunicipalityService: ICommunityMunicipalityService
    {
        private List<MunicipalityCommunity> _municipalityCommunities = new();

        public CommunityMunicipalityService()
        {
            Initialize();
        }

        public MunicipalityCommunity[] GetAll()
        {
            return _municipalityCommunities.ToArray();
        }

        public MunicipalityCommunity? GetCommunityByNumber(int number)
        {
            return _municipalityCommunities.Find(x => x.CommunityNumber == number);
        }

        public MunicipalityCommunity? GetMunicipalityByNumber(int number)
        {
            return _municipalityCommunities.Find(x => x.MunicipalityNumber == number);
        }
        public MunicipalityCommunity[] GetCommunitiesByMunicipalityNumber(int number)
        {
            return _municipalityCommunities.Where(x => x.MunicipalityNumber == number).ToArray();
        }

        public int TotalCount()
        {
            return _municipalityCommunities.Count;
        }

        private void Initialize()
        {
            var assemblyFolder = AppDomain.CurrentDomain.BaseDirectory;
            var filePath = Path.Combine(assemblyFolder, "./Data/Norge/2020", "kommuner-og-fylker.csv");

            using var reader = new StreamReader(filePath);
            string? line;

            var lineCount = 0;
            while ((line = reader.ReadLine()) != null)
            {
                lineCount++;
                if (lineCount == 1)
                {
                    continue;
                }

                var lineArray = line.Split(';');
                var cultureinfo = CultureInfo.CurrentCulture;
                var mc = new MunicipalityCommunity
                {
                    MunicipalityName = lineArray[1],
                    MunicipalityNumber = int.Parse(lineArray[0], cultureinfo),
                    CommunityName = lineArray[3],
                    CommunityNumber = int.Parse(lineArray[2], cultureinfo),
                    CountInMunicipality = int.Parse(lineArray[4], cultureinfo),
                };
                _municipalityCommunities.Add(mc);
            }
        }
    }
}