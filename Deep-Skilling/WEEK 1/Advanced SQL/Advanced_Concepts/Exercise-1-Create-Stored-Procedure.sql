-- -- 1. Stored Procedure to Retrieve Employees by Department
-- - Write the SQL query to select employee details based on the DepartmentID
CREATE  PROCEDURE  sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
-- Execute:
EXEC   sp_GetEmployeesByDepartment  3;
-- 2. Stored Procedure to Insert a New Employee

CREATE PROCEDURE sp_InsertEmployee
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10,2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees
        (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES
        (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
-- Execute:
EXEC sp_InsertEmployee
    'Robert',
    'Brown',
    3,
    6500.00,
    '2022-05-10';
