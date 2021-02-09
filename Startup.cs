using ASP_01_TestProject.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_01_TestProject
{
    public class Startup
    {
        private IConfiguration _config;
        public Startup(IConfiguration config)
        {
            _config = config;
        }
       
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddScoped<IContactRepository, SQLContactRepository>();
            services.AddDbContext<AppDBContext>(options => 
                    options.UseSqlServer(_config.GetConnectionString("ContactList")));
            services.AddControllersWithViews();
        }

        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup> logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseStatusCodePagesWithReExecute("/Error/{0}");
            }
            #region
            /*
            //app.Use(async (context, next) =>
            //{
            //    logger.LogInformation("MW1: Incoming request");
            //    await next();
            //    logger.LogInformation("MW1: Outcoming request");
            //});

            //app.Use(async (context, next) =>
            //{
            //    logger.LogInformation("MW2: Incoming request");
            //    await next();
            //    logger.LogInformation("MW2: Outcoming request");
            //});

            //app.UseDefaultFiles();
            */
            #endregion
            app.UseStaticFiles();
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}"
                );
            });
        }
    }
}
