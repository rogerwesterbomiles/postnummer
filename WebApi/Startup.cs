using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using WebApi.Extensions;

namespace WebApi
{
    public class Startup
    {
        private IConfiguration Configuration { get; }
        private IHostEnvironment? HostEnvironment { get; }

        public Startup(IHostEnvironment? env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env?.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env?.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            HostEnvironment = env;
            Configuration = builder.Build();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCustomCors(Configuration);
            services.AddControllers();
            services.AddRouting();
            services.AddSwaggerGen();
            services.AddServices();
            services.AddCompression();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();

            if (!env.IsDevelopment())
                app.UseHttpsRedirection();

            app.UseResponseCompression();

            app.AddSwaggerUi();

            app.UseRouting();
            app.UseAuthorization();
            app.UseCors();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}