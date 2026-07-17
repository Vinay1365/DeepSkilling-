namespace LibraryManagement;
public class Book
{
    public int BookId { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
}
class Program
{
    static void Main()
    {
        var books = new List<Book>
        {
            new() { BookId = 1, Title = "Algorithms", Author = "Cormen" },
            new() { BookId = 2, Title = "Clean Code", Author = "Martin" },
            new() { BookId = 3, Title = "Design Patterns", Author = "Gamma" },
            new() { BookId = 4, Title = "Refactoring", Author = "Fowler" },
            new() { BookId = 5, Title = "The Pragmatic Programmer", Author = "Hunt" }
        };
        Console.WriteLine("Linear Search for 'Clean Code': " + LinearSearch(books, "Clean Code")?.Author);
        books = books.OrderBy(b => b.Title).ToList();
        Console.WriteLine("Binary Search for 'Refactoring': " + BinarySearch(books, "Refactoring")?.Author);
    }
    static Book LinearSearch(List<Book> books, string title) => books.FirstOrDefault(b => b.Title == title);
    static Book BinarySearch(List<Book> books, string title)
    {
        int low = 0, high = books.Count - 1;
        while (low <= high)
        {
            int mid = (low + high) / 2;
            int cmp = string.Compare(books[mid].Title, title);
            if (cmp == 0) return books[mid];
            if (cmp < 0) low = mid + 1; else high = mid - 1;
        }
        return null;
    }
}
