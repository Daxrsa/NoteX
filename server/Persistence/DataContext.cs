using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
       public DataContext(DbContextOptions options) : base(options) {}
       public DbSet<Folder> Folders { get; set; }
       public DbSet<Note> Notes { get; set; }
    }
}