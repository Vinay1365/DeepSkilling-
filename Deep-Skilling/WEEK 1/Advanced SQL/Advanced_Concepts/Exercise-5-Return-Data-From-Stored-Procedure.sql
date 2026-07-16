WITH RankedProducts AS
(
    SELECT *,
           ROW_NUMBER() OVER (
               PARTITION BY Category
               ORDER BY Price DESC
           ) AS rn
    FROM Products
)
SELECT *
FROM RankedProducts
WHERE rn <= 3;
