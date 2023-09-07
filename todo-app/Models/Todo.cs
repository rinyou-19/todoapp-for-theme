using System.ComponentModel.DataAnnotations;

namespace todo_app.Models;

public class Todo
{
    public int TodoId { get ; set;}
    // 内容
    [Required]
    public string? Content { get ; set;}
    // 終了予定日
    [Required]
    public DateTime ExpectedEndDate { get ; set;}
    // 終了日
    public DateTime EndDate { get ; set;}
}