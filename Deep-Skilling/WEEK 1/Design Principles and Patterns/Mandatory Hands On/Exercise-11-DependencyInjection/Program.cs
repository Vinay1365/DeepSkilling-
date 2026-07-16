namespace DependencyInjection;
public interface ICustomerRepository
{
    string FindCustomerById(int id);
}
public class CustomerRepositoryImpl : ICustomerRepository
{
    private readonly Dictionary<int, string> _customers = new()
    {
        { 1, "Alice" }, { 2, "Bob" }, { 3, "Charlie" }
    };
    public string FindCustomerById(int id) => _customers.TryGetValue(id, out var name) ? name : "Not Found";
}
public class CustomerService
{
    private readonly ICustomerRepository _repository;
    public CustomerService(ICustomerRepository repository) => _repository = repository;
    public string GetCustomer(int id) => _repository.FindCustomerById(id);
}
class Program
{
    static void Main()
    {
        ICustomerRepository repo = new CustomerRepositoryImpl();
        var service = new CustomerService(repo);
        Console.WriteLine("Customer 1: " + service.GetCustomer(1));
        Console.WriteLine("Customer 2: " + service.GetCustomer(2));
        Console.WriteLine("Customer 4: " + service.GetCustomer(4));
    }
}
