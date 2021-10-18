using WebApi.Models;

namespace WebApi.Interfaces
{
    public interface ICommunityMunicipalityService
    {
        MunicipalityCommunity[] GetAll();

        MunicipalityCommunity? GetCommunityByNumber(int number);

        MunicipalityCommunity? GetMunicipalityByNumber(int number);
        
        MunicipalityCommunity[] GetCommunitiesByMunicipalityNumber(int number);

        int TotalCount();
    }
}