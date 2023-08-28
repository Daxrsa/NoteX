using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Api.Extensions
{
    public static class DbServiceExtensions
    {
        public static IServiceCollection AddDbServices(this IServiceCollection services,
            IConfiguration config)
        {
            services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlServer(config.GetConnectionString("DefaultConnection"));
});
        }
    }
}