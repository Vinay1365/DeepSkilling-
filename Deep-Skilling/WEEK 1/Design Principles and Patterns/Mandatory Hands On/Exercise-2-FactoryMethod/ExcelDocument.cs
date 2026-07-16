using System;

namespace FactoryMethodPatternExample
{
    public class ExcelDocument : Document
    {
        public override void Open()
        {
            Console.WriteLine("Excel Document Opened");
        }
    }
}