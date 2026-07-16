namespace ProxyPattern;
public interface IImage
{
    void Display();
}
public class RealImage : IImage
{
    private readonly string _filename;
    public RealImage(string filename) { _filename = filename; Console.WriteLine($"Loading image: {_filename}"); }
    public void Display() => Console.WriteLine($"Displaying image: {_filename}");
}
public class ProxyImage : IImage
{
    private readonly string _filename;
    private RealImage _realImage;
    public ProxyImage(string filename) => _filename = filename;
    public void Display()
    {
        _realImage ??= new RealImage(_filename);
        _realImage.Display();
    }
}
class Program
{
    static void Main()
    {
        IImage image1 = new ProxyImage("photo1.jpg");
        IImage image2 = new ProxyImage("photo2.jpg");
        image1.Display();
        image1.Display();
        image2.Display();
    }
}
