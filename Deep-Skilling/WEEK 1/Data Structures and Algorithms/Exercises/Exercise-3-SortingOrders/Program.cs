namespace SortingOrders;
public class Order
{
    public int OrderId { get; set; }
    public string CustomerName { get; set; }
    public double TotalPrice { get; set; }
}
class Program
{
    static void Main()
    {
        var orders = new List<Order>
        {
            new() { OrderId = 1, CustomerName = "Alice", TotalPrice = 250.00 },
            new() { OrderId = 2, CustomerName = "Bob", TotalPrice = 150.00 },
            new() { OrderId = 3, CustomerName = "Charlie", TotalPrice = 350.00 },
            new() { OrderId = 4, CustomerName = "David", TotalPrice = 100.00 },
            new() { OrderId = 5, CustomerName = "Eve", TotalPrice = 200.00 }
        };
        var bubbleSorted = new List<Order>(orders);
        BubbleSort(bubbleSorted);
        Console.WriteLine("Bubble Sort:");
        Print(bubbleSorted);
        var quickSorted = new List<Order>(orders);
        QuickSort(quickSorted, 0, quickSorted.Count - 1);
        Console.WriteLine("\nQuick Sort:");
        Print(quickSorted);
    }
    static void BubbleSort(List<Order> list)
    {
        for (int i = 0; i < list.Count - 1; i++)
            for (int j = 0; j < list.Count - i - 1; j++)
                if (list[j].TotalPrice > list[j + 1].TotalPrice)
                    (list[j], list[j + 1]) = (list[j + 1], list[j]);
    }
    static void QuickSort(List<Order> list, int low, int high)
    {
        if (low < high) { int pi = Partition(list, low, high); QuickSort(list, low, pi - 1); QuickSort(list, pi + 1, high); }
    }
    static int Partition(List<Order> list, int low, int high)
    {
        double pivot = list[high].TotalPrice;
        int i = low - 1;
        for (int j = low; j < high; j++)
            if (list[j].TotalPrice <= pivot) { i++; (list[i], list[j]) = (list[j], list[i]); }
        (list[i + 1], list[high]) = (list[high], list[i + 1]);
        return i + 1;
    }
    static void Print(List<Order> list) { foreach (var o in list) Console.WriteLine($"  {o.CustomerName}: ${o.TotalPrice}"); }
}
