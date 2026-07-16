CREATE TABLE AuditLog (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    TableName VARCHAR(50),
    Operation VARCHAR(10),
    RecordID INT,
    ChangeDate DATETIME DEFAULT GETDATE()
);

CREATE TRIGGER trg_AfterInsert ON Employees
AFTER INSERT
AS
BEGIN
    INSERT INTO AuditLog(TableName, Operation, RecordID)
    SELECT 'Employees', 'INSERT', EmployeeID FROM inserted;
END;

CREATE TRIGGER trg_AfterUpdate ON Employees
AFTER UPDATE
AS
BEGIN
    INSERT INTO AuditLog(TableName, Operation, RecordID)
    SELECT 'Employees', 'UPDATE', EmployeeID FROM inserted;
END;

CREATE TRIGGER trg_AfterDelete ON Employees
AFTER DELETE
AS
BEGIN
    INSERT INTO AuditLog(TableName, Operation, RecordID)
    SELECT 'Employees', 'DELETE', EmployeeID FROM deleted;
END;

INSERT INTO Employees VALUES (6,'Frank','IT',72000,'2022-01-01');
UPDATE Employees SET Salary = 73000 WHERE EmployeeID = 6;
DELETE FROM Employees WHERE EmployeeID = 6;
SELECT * FROM AuditLog;
