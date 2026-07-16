using System;

namespace ECommerceSearch
{
    class Product
    {
        public int ProductId;
        public string ProductName;
        public string Category;

        public Product(int productId, string productName, string category)
        {
            ProductId = productId;
            ProductName = productName;
            Category = category;
        }
    }

    class Program
    {
        static Product LinearSearch(Product[] products, int targetId)
        {
            foreach (Product product in products)
            {
                if (product.ProductId == targetId)
                {
                    return product;
                }
            }

            return null;
        }

        static Product BinarySearch(Product[] products, int targetId)
        {
            int left = 0;
            int right = products.Length - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;

                if (products[mid].ProductId == targetId)
                {
                    return products[mid];
                }

                if (products[mid].ProductId < targetId)
                {
                    left = mid + 1;
                }
                else
                {
                    right = mid - 1;
                }
            }

            return null;
        }

        static void Main(string[] args)
        {
            Product[] products =
            {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Headphones", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(105, "Watch", "Accessories")
            };

            int targetId = 104;

            Console.WriteLine("LINEAR SEARCH");

            Product linearResult = LinearSearch(products, targetId);

            if (linearResult != null)
            {
                Console.WriteLine(
                    $"Product Found: {linearResult.ProductName}");
            }
            else
            {
                Console.WriteLine("Product Not Found");
            }

            Console.WriteLine();

            Console.WriteLine("BINARY SEARCH");

            Product binaryResult = BinarySearch(products, targetId);

            if (binaryResult != null)
            {
                Console.WriteLine(
                    $"Product Found: {binaryResult.ProductName}");
            }
            else
            {
                Console.WriteLine("Product Not Found");
            }

            Console.WriteLine();
            Console.WriteLine("Time Complexity Analysis");
            Console.WriteLine("Linear Search : O(n)");
            Console.WriteLine("Binary Search : O(log n)");
        }
    }
}