using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todo_app.Models;

namespace todo_app.Contorollers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoControllers : ControllerBase
    {
        private readonly TodoContext _context;

        // コンストラクター

        public TodoControllers(TodoContext context)
        {
            _context = context;
        }

    }
}