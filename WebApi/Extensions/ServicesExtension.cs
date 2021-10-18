using Microsoft.Extensions.DependencyInjection;
using WebApi.Interfaces;
using WebApi.Services;

namespace WebApi.Extensions
{
    public static class ServicesExtension
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddSingleton<ICommunityMunicipalityService, CommunityMunicipalityService>();
            
            return services;
        }
    }
}