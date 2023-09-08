using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using todo_app.Models;

namespace todo_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _context;

        public TodoController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodo()
        {
            if (_context.Todo == null)
            {
                return NotFound();
            }
            return await _context.Todo.ToListAsync();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            if (_context.Todo == null)
            {
                return NotFound();
            }
            var todo = await _context.Todo.FindAsync(id);

            if (todo == null)
            {
                return NotFound();
            }

            return todo;
        }

        // PUT: api/Todo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodo(int id, Todo todo)
        {
            if (id != todo.TodoId)
            {
                return BadRequest();
            }

            _context.Entry(todo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Todo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Todo>> PostTodo(Todo todo)
        {
            // DateTimeオブジェクトをPostgre登録用に変換をかける
            // 終了予定日
            DateTime expectedEndDate = todo.ExpectedEndDate;
            DateTime expectedEndDateForEntry = expectedEndDate.ToUniversalTime();
            // 終了日
            DateTime endDate = todo.EndDate;
            DateTime endDateForEntry = endDate.ToUniversalTime();
            // データ登録用に変数に再格納
            Todo todoForEntry = new Todo();
            todoForEntry.Content = todo.Content;
            todoForEntry.ExpectedEndDate = expectedEndDateForEntry;
            todoForEntry.EndDate = endDateForEntry;
            if (_context.Todo == null)
            {
                return Problem("Entity set 'TodoContext.Todo'  is null.");
            }
            _context.Todo.Add(todoForEntry);
            //await _context.SaveChangesAsync();
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                var a = e;
                if (true)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTodo", new { id = todo.TodoId }, todo);
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(int id)
        {
            if (_context.Todo == null)
            {
                return NotFound();
            }
            var todo = await _context.Todo.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Todo.Remove(todo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoExists(int id)
        {
            return (_context.Todo?.Any(e => e.TodoId == id)).GetValueOrDefault();
        }
    }
}
