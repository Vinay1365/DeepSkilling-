namespace EmployeeManagement;
public class Employee
{
    public int EmployeeId { get; set; }
    public string Name { get; set; }
    public string Position { get; set; }
    public double Salary { get; set; }
}
class Program
{
    static Employee[] employees = new Employee[10];
    static int count = 0;
    static void Main()
    {
        Add(new Employee { EmployeeId = 1, Name = "Alice", Position = "Developer", Salary = 75000 });
        Add(new Employee { EmployeeId = 2, Name = "Bob", Position = "Manager", Salary = 90000 });
        Add(new Employee { EmployeeId = 3, Name = "Charlie", Position = "Designer", Salary = 65000 });
        Console.WriteLine("All Employees:");
        Traverse();
        Console.WriteLine("\nSearch ID 2: " + Search(2)?.Name);
        Delete(2);
        Console.WriteLine("\nAfter deleting ID 2:");
        Traverse();
    }
    static void Add(Employee e) { if (count < employees.Length) employees[count++] = e; }
    static Employee Search(int id) { for (int i = 0; i < count; i++) if (employees[i].EmployeeId == id) return employees[i]; return null; }
    static void Traverse() { for (int i = 0; i < count; i++) Console.WriteLine($"  {employees[i].EmployeeId}: {employees[i].Name} - {employees[i].Position} (${employees[i].Salary})"); }
    static void Delete(int id)
    {
        for (int i = 0; i < count; i++)
            if (employees[i].EmployeeId == id) { for (int j = i; j < count - 1; j++) employees[j] = employees[j + 1]; count--; return; }
    }
}
