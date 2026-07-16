using Microsoft.EntityFrameworkCore;
using EFCoreDemo;

using var context = new SchoolContext();
context.Database.EnsureCreated();

var student = new Student { Name = "Charlie", Email = "charlie@test.com", EnrollmentDate = DateTime.Now };
context.Students.Add(student);
context.SaveChanges();
Console.WriteLine("Added student: " + student.Name);

var students = context.Students.ToList();
Console.WriteLine("\nAll Students:");
foreach (var s in students) Console.WriteLine($"  {s.StudentId}: {s.Name} ({s.Email})");

var found = context.Students.FirstOrDefault(s => s.Name == "Alice");
if (found != null) { found.Email = "alice.updated@test.com"; context.SaveChanges(); Console.WriteLine("\nUpdated Alice email"); }

var courses = context.Courses.ToList();
Console.WriteLine("\nAll Courses:");
foreach (var c in courses) Console.WriteLine($"  {c.CourseId}: {c.Title} ({c.Credits} credits)");

var enrollment = new Enrollment { StudentId = 1, CourseId = 1, Grade = "A" };
context.Enrollments.Add(enrollment);
context.SaveChanges();

var enrolledStudents = context.Enrollments.Include(e => e.Student).Include(e => e.Course).ToList();
Console.WriteLine("\nEnrollments:");
foreach (var e in enrolledStudents) Console.WriteLine($"  {e.Student.Name} -> {e.Course.Title} (Grade: {e.Grade})");
