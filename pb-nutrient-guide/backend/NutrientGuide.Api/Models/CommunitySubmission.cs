namespace NutrientGuide.Api.Models;

public class CommunitySubmission
{
    public int Id { get; set; }

    public string NutrientId { get; set; } = "";

    // "source" or "meal"
    public string Type { get; set; } = "";

    public string Text { get; set; } = "";

    public DateTime CreatedAtUtc { get; set; } = DateTime.UtcNow;
}