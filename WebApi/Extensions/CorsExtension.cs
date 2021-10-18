using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
namespace WebApi.Extensions
{
    public static class CorsExtension
    {
        public static IServiceCollection AddCustomCors(this IServiceCollection services, IConfiguration config)
        {
            var hosts = config?.GetSection("AllowedHosts").Get<string[]>();
            if (hosts != null && hosts.Length > 0)
            {
                services.AddCors(options =>
                {
                    options.AddDefaultPolicy(builder =>
                        builder.WithOrigins(hosts)
                            .AllowAnyHeader()
                            .AllowCredentials()
                            .AllowAnyMethod());
                });
            }

            return services;
        }
    }
}