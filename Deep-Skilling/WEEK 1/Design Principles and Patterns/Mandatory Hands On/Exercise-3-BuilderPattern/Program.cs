using BuilderPattern;
var gaming = new Computer.Builder()
    .SetCPU("Intel i9")
    .SetRAM("32GB")
    .SetStorage("1TB SSD")
    .SetGPU("RTX 4090")
    .SetOS("Windows 11")
    .Build();
var office = new Computer.Builder()
    .SetCPU("Intel i5")
    .SetRAM("16GB")
    .SetStorage("512GB SSD")
    .SetOS("Windows 11")
    .Build();
Console.WriteLine("Gaming PC: " + gaming);
Console.WriteLine("Office PC: " + office);
