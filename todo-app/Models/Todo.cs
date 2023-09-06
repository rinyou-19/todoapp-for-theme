using System.ComponentModel.DataAnnotations;

namespace todo_app.Models;

public class Todo
{
    public int TodoId { get ; set;}
    [Required]
    public string? Content { get ; set;}
    public DateTime EndOfDate { get ; set;}
}