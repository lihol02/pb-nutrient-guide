using Microsoft.EntityFrameworkCore;
using NutrientGuide.Api.Models;

namespace NutrientGuide.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<CommunitySubmission> CommunitySubmissions => Set<CommunitySubmission>();
}