namespace StrategyPattern;
public interface IPaymentStrategy { void Pay(double amount); }
public class CreditCardPayment : IPaymentStrategy
{
    private readonly string _cardNumber;
    public CreditCardPayment(string cardNumber) => _cardNumber = cardNumber;
    public void Pay(double amount) => Console.WriteLine($"Paid ${amount} using Credit Card {_cardNumber}");
}
public class PayPalPayment : IPaymentStrategy
{
    private readonly string _email;
    public PayPalPayment(string email) => _email = email;
    public void Pay(double amount) => Console.WriteLine($"Paid ${amount} using PayPal ({_email})");
}
public class PaymentContext
{
    private IPaymentStrategy _strategy;
    public void SetStrategy(IPaymentStrategy strategy) => _strategy = strategy;
    public void ExecutePayment(double amount) => _strategy.Pay(amount);
}
class Program
{
    static void Main()
    {
        var context = new PaymentContext();
        context.SetStrategy(new CreditCardPayment("1234-5678-9012-3456"));
        context.ExecutePayment(100.00);
        context.SetStrategy(new PayPalPayment("user@email.com"));
        context.ExecutePayment(200.00);
    }
}
