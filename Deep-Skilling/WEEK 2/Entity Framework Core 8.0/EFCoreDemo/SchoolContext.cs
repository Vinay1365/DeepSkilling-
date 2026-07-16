using Microsoft.EntityFrameworkCore;
namespace EFCoreDemo;
public class SchoolContext : DbContext
{
    public DbSet<Student> Students { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Enrollment> Enrollments { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SchoolDB;Trusted_Connection=True;");
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Student>().HasData(
            new Student { StudentId = 1, Name = "Alice", Email = "alice@test.com", EnrollmentDate = DateTime.Parse("2024-01-15") },
            new Student { StudentId = 2, Name = "Bob", Email = "bob@test.com", EnrollmentDate = DateTime.Parse("2024-02-20") }
        );
        modelBuilder.Entity<Course>().HasData(
            new Course { CourseId = 1, Title = "C# Fundamentals", Credits = 3 },
            new Course { CourseId = 2, Title = "ASP.NET Core", Credits = 4 }
        );
    }
}
