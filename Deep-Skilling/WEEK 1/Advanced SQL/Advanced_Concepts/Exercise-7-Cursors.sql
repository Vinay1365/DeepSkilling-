DECLARE @EmpID INT, @Name VARCHAR(100), @Salary DECIMAL(10,2);

DECLARE emp_cursor CURSOR FOR
SELECT EmployeeID, Name, Salary FROM Employees ORDER BY EmployeeID;

OPEN emp_cursor;
FETCH NEXT FROM emp_cursor INTO @EmpID, @Name, @Salary;

WHILE @@FETCH_STATUS = 0
BEGIN
    IF @Salary < 70000
        UPDATE Employees SET Salary = Salary * 1.10 WHERE EmployeeID = @EmpID;
    FETCH NEXT FROM emp_cursor INTO @EmpID, @Name, @Salary;
END;

CLOSE emp_cursor;
DEALLOCATE emp_cursor;

SELECT * FROM Employees;
