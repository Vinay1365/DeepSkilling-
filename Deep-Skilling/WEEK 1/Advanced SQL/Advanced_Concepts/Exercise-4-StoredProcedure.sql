CREATE PROCEDURE sp_GetEmployeesByDept
    @Department VARCHAR(50)
AS
BEGIN
    SELECT * FROM Employees WHERE Department = @Department;
END;

EXEC sp_GetEmployeesByDept @Department = 'IT';

CREATE PROCEDURE sp_UpdateSalary
    @EmployeeID INT,
    @NewSalary DECIMAL(10,2)
AS
BEGIN
    UPDATE Employees SET Salary = @NewSalary WHERE EmployeeID = @EmployeeID;
    SELECT * FROM Employees WHERE EmployeeID = @EmployeeID;
END;

EXEC sp_UpdateSalary @EmployeeID = 1, @NewSalary = 80000;

CREATE PROCEDURE sp_GetEmployeeCount
    @Department VARCHAR(50),
    @Count INT OUTPUT
AS
BEGIN
    SELECT @Count = COUNT(*) FROM Employees WHERE Department = @Department;
END;

DECLARE @Result INT;
EXEC sp_GetEmployeeCount @Department = 'IT', @Count = @Result OUTPUT;
SELECT @Result AS EmployeeCount;
