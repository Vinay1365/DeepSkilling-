CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Department VARCHAR(50),
    Salary DECIMAL(10,2),
    HireDate DATE
);

INSERT INTO Employees VALUES
(1,'Alice','IT',75000,'2020-01-15'),
(2,'Bob','HR',65000,'2019-03-20'),
(3,'Charlie','IT',80000,'2018-07-10'),
(4,'David','Finance',70000,'2021-06-01'),
(5,'Eve','HR',68000,'2020-11-25');

CREATE VIEW vw_ITEmployees AS
SELECT EmployeeID, Name, Salary FROM Employees WHERE Department = 'IT';

SELECT * FROM vw_ITEmployees;

CREATE VIEW vw_DepartmentSalary AS
SELECT Department, COUNT(*) AS EmpCount, AVG(Salary) AS AvgSalary
FROM Employees GROUP BY Department;

SELECT * FROM vw_DepartmentSalary;

CREATE VIEW vw_HighEarners AS
SELECT Name, Department, Salary FROM Employees WHERE Salary > 70000;

SELECT * FROM vw_HighEarners;
