CREATE FUNCTION fn_GetFullName(@FirstName VARCHAR(50), @LastName VARCHAR(50))
RETURNS VARCHAR(100)
AS
BEGIN
    RETURN @FirstName + ' ' + @LastName;
END;

SELECT dbo.fn_GetFullName('John', 'Doe') AS FullName;

CREATE FUNCTION fn_GetEmployeesByDept(@Department VARCHAR(50))
RETURNS TABLE
AS
RETURN (SELECT EmployeeID, Name, Salary FROM Employees WHERE Department = @Department);

SELECT * FROM fn_GetEmployeesByDept('IT');

CREATE FUNCTION fn_CalculateBonus(@Salary DECIMAL(10,2), @Percentage DECIMAL(5,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Salary * @Percentage / 100;
END;

SELECT Name, Salary, dbo.fn_CalculateBonus(Salary, 10) AS Bonus FROM Employees;
