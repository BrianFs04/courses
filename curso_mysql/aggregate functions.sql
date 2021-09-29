-- Aggregate functions
SELECT * FROM company;
-- MIN - min value
SELECT MIN(salary) AS minimun_salary FROM company;
-- MAX - max value
SELECT MAX(age) AS maximun_age FROM company;
-- COUNT only count records which aren't NULL
SELECT COUNT(country) AS not_null_countries FROM company;
SELECT COUNT(salary) AS not_null_salaries FROM company;
SELECT COUNT(DISTINCT country) AS not_repeated_no_of_countries FROM company;
-- SUM
SELECT SUM(age) AS sum_of_ages FROM company;
-- AVG
SELECT AVG(age) AS average_age FROM company;