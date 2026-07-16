BEGIN TRY
    INSERT INTO Employees VALUES (1, 'Duplicate', 'IT', 50000, '2023-01-01');
END TRY
BEGIN CATCH
    SELECT ERROR_NUMBER() AS ErrorNumber,
           ERROR_MESSAGE() AS ErrorMessage,
           ERROR_SEVERITY() AS ErrorSeverity,
           ERROR_STATE() AS ErrorState;
END CATCH;

CREATE PROCEDURE sp_TransferSalary
    @FromID INT, @ToID INT, @Amount DECIMAL(10,2)
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;
        UPDATE Employees SET Salary = Salary - @Amount WHERE EmployeeID = @FromID;
        IF (SELECT Salary FROM Employees WHERE EmployeeID = @FromID) < 0
            THROW 50001, 'Insufficient salary balance', 1;
        UPDATE Employees SET Salary = Salary + @Amount WHERE EmployeeID = @ToID;
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        SELECT ERROR_NUMBER() AS ErrorNumber, ERROR_MESSAGE() AS ErrorMessage;
    END CATCH;
END;

EXEC sp_TransferSalary @FromID = 1, @ToID = 2, @Amount = 5000;
