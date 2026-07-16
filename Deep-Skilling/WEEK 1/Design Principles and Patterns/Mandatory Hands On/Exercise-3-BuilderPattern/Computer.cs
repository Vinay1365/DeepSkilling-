namespace BuilderPattern;
public class Computer
{
    public string CPU { get; private set; }
    public string RAM { get; private set; }
    public string Storage { get; private set; }
    public string GPU { get; private set; }
    public string OS { get; private set; }

    private Computer() { }

    public override string ToString() =>
        $"CPU: {CPU}, RAM: {RAM}, Storage: {Storage}, GPU: {GPU}, OS: {OS}";

    public class Builder
    {
        private readonly Computer _computer = new();
        public Builder SetCPU(string cpu) { _computer.CPU = cpu; return this; }
        public Builder SetRAM(string ram) { _computer.RAM = ram; return this; }
        public Builder SetStorage(string storage) { _computer.Storage = storage; return this; }
        public Builder SetGPU(string gpu) { _computer.GPU = gpu; return this; }
        public Builder SetOS(string os) { _computer.OS = os; return this; }
        public Computer Build() => _computer;
    }
}
