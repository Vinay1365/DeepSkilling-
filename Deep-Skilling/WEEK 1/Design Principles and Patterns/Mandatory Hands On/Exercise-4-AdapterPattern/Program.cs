namespace AdapterPattern;
public interface IPaymentProcessor
{
    void ProcessPayment(double amount);
}
public class PayPalGateway
{
    public void MakePayment(double amount) => Console.WriteLine($"PayPal payment of ${amount}");
}
public class StripeGateway
{
    public void Pay(double amount) => Console.WriteLine($"Stripe payment of ${amount}");
}
public class PayPalAdapter : IPaymentProcessor
{
    private readonly PayPalGateway _gateway = new();
    public void ProcessPayment(double amount) => _gateway.MakePayment(amount);
}
public class StripeAdapter : IPaymentProcessor
{
    private readonly StripeGateway _gateway = new();
    public void ProcessPayment(double amount) => _gateway.Pay(amount);
}
class Program
{
    static void Main()
    {
        IPaymentProcessor paypal = new PayPalAdapter();
        IPaymentProcessor stripe = new StripeAdapter();
        paypal.ProcessPayment(100.00);
        stripe.ProcessPayment(200.00);
    }
}
