SELECT * FROM company;
-- AND OPERATOR
SELECT * FROM company WHERE department=2 AND country='USA';
-- OR OPERATOR
SELECT * FROM company WHERE department=2 OR country='USA';
-- OR AND AND - DIFFERENT RESULTS
SELECT * FROM company WHERE AGE>=20 OR department=2 AND country="USA";
SELECT * FROM company WHERE (AGE>=20 OR department=2) AND country="USA";
-- NOT OPERATOR
SELECT * FROM company WHERE NOT department=2;
-- IN OPERATOR
SELECT * FROM company WHERE country IN("COP", "USA");
SELECT * FROM company WHERE country NOT IN("COP", "USA");
-- LIKE KEYWORD
-- %A ends, A% starts, %A% contains
SELECT * FROM company WHERE name LIKE '%A%';
-- BETWEEN KEYWORD
SELECT * FROM company WHERE salary BETWEEN 300 AND 500;
SELECT * FROM company WHERE (salary BETWEEN 300 AND 500) AND (age BETWEEN 15 AND 21);
-- NULL KEYWORD
SELECT * FROM company WHERE department IS NULL;
-- ORDER BY KEYWORD
-- ORDER BY - ASC * DEFAULT
-- ORDER BY - DESC 
SELECT * FROM company ORDER BY name DESC;
SELECT name, country FROM company ORDER BY salary;
-- LIMIT KEYWORD
SELECT * FROM company LIMIT 2; -- It shows until the second record
SELECT * FROM company LIMIT 1, 2; -- It shows second a third record
