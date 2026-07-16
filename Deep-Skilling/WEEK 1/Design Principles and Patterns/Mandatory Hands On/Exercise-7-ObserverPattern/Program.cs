namespace ObserverPattern;
public interface IObserver { void Update(string stockName, double price); }
public interface IStock { void Register(IObserver o); void Deregister(IObserver o); void NotifyObservers(); }
public class StockMarket : IStock
{
    private readonly List<IObserver> _observers = new();
    private string _stockName;
    private double _price;
    public void Register(IObserver o) => _observers.Add(o);
    public void Deregister(IObserver o) => _observers.Remove(o);
    public void NotifyObservers() { foreach (var o in _observers) o.Update(_stockName, _price); }
    public void SetStockPrice(string name, double price) { _stockName = name; _price = price; NotifyObservers(); }
}
public class MobileApp : IObserver
{
    public void Update(string stockName, double price) => Console.WriteLine($"MobileApp: {stockName} = ${price}");
}
public class WebApp : IObserver
{
    public void Update(string stockName, double price) => Console.WriteLine($"WebApp: {stockName} = ${price}");
}
class Program
{
    static void Main()
    {
        var market = new StockMarket();
        var mobile = new MobileApp();
        var web = new WebApp();
        market.Register(mobile);
        market.Register(web);
        market.SetStockPrice("AAPL", 150.00);
        market.SetStockPrice("GOOGL", 2800.00);
    }
}
