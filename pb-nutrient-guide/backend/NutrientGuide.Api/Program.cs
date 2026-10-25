using Microsoft.EntityFrameworkCore;
using NutrientGuide.Api.Data;
using NutrientGuide.Api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

var connectionString =
    builder.Configuration.GetConnectionString("DefaultConnection")
    ?? "Data Source=nutrient-guide.db";

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//app.UseHttpsRedirection();
app.UseCors();

var allowedNutrients = new HashSet<string>
{
    "calcium",
    "iron",
    "vitamin-d",
    "omega-3",
    "iodine",
    "vitamin-b12"
};

// Get community submissions for one nutrient.
app.MapGet("/api/nutrients/{nutrientId}/submissions",
    async (string nutrientId, AppDbContext db) =>
    {
        if (!allowedNutrients.Contains(nutrientId))
        {
            return Results.NotFound();
        }

        var submissions = await db.CommunitySubmissions
            .Where(item => item.NutrientId == nutrientId)
            .OrderByDescending(item => item.CreatedAtUtc)
            .ToListAsync();

        return Results.Ok(submissions);
    });

// Add a community source or meal idea.
app.MapPost("/api/nutrients/{nutrientId}/submissions",
    async (string nutrientId, SubmissionRequest request, AppDbContext db) =>
    {
        if (!allowedNutrients.Contains(nutrientId))
        {
            return Results.NotFound();
        }

        var type = request.Type.Trim().ToLowerInvariant();
        var text = request.Text.Trim();

        if (type is not ("source" or "meal"))
        {
            return Results.BadRequest("Type must be 'source' or 'meal'.");
        }

        if (text.Length is < 2 or > 500)
        {
            return Results.BadRequest("Text must be between 2 and 500 characters.");
        }

        var submission = new CommunitySubmission
        {
            NutrientId = nutrientId,
            Type = type,
            Text = text,
            CreatedAtUtc = DateTime.UtcNow
        };

        db.CommunitySubmissions.Add(submission);
        await db.SaveChangesAsync();

        return Results.Created(
            $"/api/nutrients/{nutrientId}/submissions",
            submission);
    });

app.MapPut("/api/submissions/{id:int}", async (
    int id,
    UpdateSubmissionRequest request,
    AppDbContext db) =>
{
    var submission = await db.CommunitySubmissions.FindAsync(id);

    if (submission is null)
    {
        return Results.NotFound();
    }

    var type = request.Type?.Trim().ToLowerInvariant();
    var text = request.Text?.Trim();

    if (type is not ("source" or "meal"))
    {
        return Results.BadRequest("Type must be 'source' or 'meal'.");
    }

    if (string.IsNullOrWhiteSpace(text) || text.Length < 2 || text.Length > 500)
    {
        return Results.BadRequest("Text must be between 2 and 500 characters.");
    }

    submission.Type = type;
    submission.Text = text;

    await db.SaveChangesAsync();

    return Results.Ok(submission);
});

app.MapDelete("/api/submissions/{id:int}", async (int id, AppDbContext db) =>
{
    var submission = await db.CommunitySubmissions.FindAsync(id);

    if (submission is null)
    {
        return Results.NotFound();
    }

    db.CommunitySubmissions.Remove(submission);
    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.Run();

record SubmissionRequest(string Type, string Text);
record UpdateSubmissionRequest(string? Type, string? Text);