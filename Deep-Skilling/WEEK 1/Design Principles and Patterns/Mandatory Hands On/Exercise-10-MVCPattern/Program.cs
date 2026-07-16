namespace MVCPattern;
public class Student
{
    public string Name { get; set; }
    public int Id { get; set; }
    public string Grade { get; set; }
}
public class StudentView
{
    public void DisplayStudentDetails(string name, int id, string grade)
    {
        Console.WriteLine($"Student: {name}, ID: {id}, Grade: {grade}");
    }
}
public class StudentController
{
    private readonly Student _model;
    private readonly StudentView _view;
    public StudentController(Student model, StudentView view) { _model = model; _view = view; }
    public void SetStudentName(string name) => _model.Name = name;
    public void SetStudentId(int id) => _model.Id = id;
    public void SetStudentGrade(string grade) => _model.Grade = grade;
    public void UpdateView() => _view.DisplayStudentDetails(_model.Name, _model.Id, _model.Grade);
}
class Program
{
    static void Main()
    {
        var student = new Student { Name = "John", Id = 1, Grade = "A" };
        var view = new StudentView();
        var controller = new StudentController(student, view);
        controller.UpdateView();
        controller.SetStudentName("Jane");
        controller.SetStudentGrade("A+");
        controller.UpdateView();
    }
}
