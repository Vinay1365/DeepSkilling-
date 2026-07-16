namespace TaskManagement;
public class TaskNode
{
    public int TaskId { get; set; }
    public string TaskName { get; set; }
    public string Status { get; set; }
    public TaskNode Next { get; set; }
}
public class TaskLinkedList
{
    private TaskNode head;
    public void Add(int id, string name, string status)
    {
        var node = new TaskNode { TaskId = id, TaskName = name, Status = status, Next = head };
        head = node;
    }
    public TaskNode Search(int id) { var c = head; while (c != null) { if (c.TaskId == id) return c; c = c.Next; } return null; }
    public void Delete(int id)
    {
        if (head == null) return;
        if (head.TaskId == id) { head = head.Next; return; }
        var c = head;
        while (c.Next != null) { if (c.Next.TaskId == id) { c.Next = c.Next.Next; return; } c = c.Next; }
    }
    public void Traverse() { var c = head; while (c != null) { Console.WriteLine($"  Task {c.TaskId}: {c.TaskName} [{c.Status}]"); c = c.Next; } }
}
class Program
{
    static void Main()
    {
        var list = new TaskLinkedList();
        list.Add(1, "Design UI", "Pending");
        list.Add(2, "Write API", "In Progress");
        list.Add(3, "Test App", "Completed");
        Console.WriteLine("All Tasks:");
        list.Traverse();
        Console.WriteLine("\nSearch Task 2: " + list.Search(2)?.TaskName);
        list.Delete(2);
        Console.WriteLine("\nAfter deleting Task 2:");
        list.Traverse();
    }
}
