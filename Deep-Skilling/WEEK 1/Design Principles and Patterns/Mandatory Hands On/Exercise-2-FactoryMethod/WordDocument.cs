using System;

namespace FactoryMethodPatternExample
{
    public class WordDocument : Document
    {
        public override void Open()
        {
            Console.WriteLine("Word Document Opened");
        }
    }
}