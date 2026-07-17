namespace InventoryManagement;
public class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public int Quantity { get; set; }
    public double Price { get; set; }
}
class Program
{
    static Dictionary<int, Product> inventory = new();
    static void Main()
    {
        AddProduct(new Product { ProductId = 1, ProductName = "Laptop", Quantity = 10, Price = 999.99 });
        AddProduct(new Product { ProductId = 2, ProductName = "Mouse", Quantity = 50, Price = 29.99 });
        AddProduct(new Product { ProductId = 3, ProductName = "Keyboard", Quantity = 30, Price = 49.99 });
        DisplayAll();
        UpdateProduct(1, 15, 949.99);
        Console.WriteLine("\nAfter update:");
        DisplayAll();
        DeleteProduct(3);
        Console.WriteLine("\nAfter delete:");
        DisplayAll();
    }
    static void AddProduct(Product p) => inventory[p.ProductId] = p;
    static void UpdateProduct(int id, int qty, double price)
    {
        if (inventory.ContainsKey(id)) { inventory[id].Quantity = qty; inventory[id].Price = price; }
    }
    static void DeleteProduct(int id) => inventory.Remove(id);
    static void DisplayAll()
    {
        foreach (var p in inventory.Values)
            Console.WriteLine($"ID: {p.ProductId}, Name: {p.ProductName}, Qty: {p.Quantity}, Price: ${p.Price}");
    }
}
