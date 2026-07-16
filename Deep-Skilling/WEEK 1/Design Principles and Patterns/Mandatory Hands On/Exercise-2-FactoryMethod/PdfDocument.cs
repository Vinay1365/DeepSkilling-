using System;

namespace FactoryMethodPatternExample
{
    public class PdfDocument : Document
    {
        public override void Open()
        {
            Console.WriteLine("PDF Document Opened");
        }
    }
}