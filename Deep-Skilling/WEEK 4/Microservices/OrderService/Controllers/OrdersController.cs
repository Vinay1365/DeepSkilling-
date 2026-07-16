using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OrderService.Models;

namespace OrderService.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class OrdersController : ControllerBase
{
    private static readonly List<Order> _orders = new()
    {
        new Order { Id = 1, ProductName = "Laptop", Quantity = 1, TotalPrice = 999.99m, Status = "Completed", OrderDate = DateTime.Parse("2024-01-15") },
        new Order { Id = 2, ProductName = "Mouse", Quantity = 2, TotalPrice = 59.98m, Status = "Pending", OrderDate = DateTime.Parse("2024-01-20") }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Order>> GetAll() => Ok(_orders);

    [HttpGet("{id}")]
    public ActionResult<Order> GetById(int id) { var o = _orders.FirstOrDefault(x => x.Id == id); return o == null ? NotFound() : Ok(o); }

    [HttpPost]
    public ActionResult<Order> Create(Order order) { order.Id = _orders.Max(o => o.Id) + 1; order.OrderDate = DateTime.Now; _orders.Add(order); return CreatedAtAction(nameof(GetById), new { id = order.Id }, order); }

    [HttpGet("health")]
    [AllowAnonymous]
    public IActionResult HealthCheck() => Ok(new { status = "Healthy", service = "OrderService", timestamp = DateTime.UtcNow });
}
