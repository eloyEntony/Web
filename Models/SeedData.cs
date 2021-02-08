using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP_01_TestProject.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new AppDBContext(
                serviceProvider.GetRequiredService<DbContextOptions<AppDBContext>>()))
            {
                
                if (context.Contacts.Any())
                {
                    return;  
                }

                context.Contacts.AddRange(
                    new Contact
                    {
                        
                    }

                   
                );
                context.SaveChanges();
            }
        }
    }
}
