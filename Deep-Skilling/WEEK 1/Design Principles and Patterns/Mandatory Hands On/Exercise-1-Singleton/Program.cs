using System;

namespace SingletonPatternExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Logger logger1 = Logger.GetInstance();
            Logger logger2 = Logger.GetInstance();

            logger1.Log("Application Started");
            logger2.Log("User Logged In");

            Console.WriteLine();


            if (logger1 == logger2)
            {
                Console.WriteLine("Only one Logger object exists.");
            }
            else
            {
                Console.WriteLine("Multiple Logger objects created.");
            }
        }
    }
}