-- Create table
CREATE TABLE employee(
	emp_id INT NOT NULL,
	emp_name VARCHAR(10) NOT NULL,
    emp_surname VARCHAR(15),
    age INT,
    department VARCHAR(15) NOT NULL,
    salary INT,
    job_title VARCHAR(20),
    boss VARCHAR(10),
    PRIMARY KEY(emp_id)
);
-- Fill table
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('20', 'Perez', 'Erika', '25', 'Customer', '9000', 'Seller', 'Mark');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('58', 'Smith', 'Janeth', '19', 'Customer', '7200', 'Supplier', 'Stephen');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('76', 'Ramirez ', 'Nero', '55', 'Engineering', '900', 'Engineer', 'Richard');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('90', 'Lago', 'Carlos', '45', 'Accounting', '15000', 'Accountant', 'Stephen');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('55', 'Daniel', 'Kevin', '66', 'Marketing', '2900', 'Seller', 'Mark');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('91', 'John', 'Sam', '22', 'Engineering', '12000', 'Software Developer', 'Larry');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('19', 'Bill', 'Jackson', '45', 'Engineering', '4000', 'Game Developer', 'Richard');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('28', 'Lago', 'Roly', '77', 'Engineering', '4500', 'SQL Developer', 'Stephen');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('34', 'John', 'Kelly', '34', 'Customer', '18000', 'Supplier', 'Jack');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('105', 'Ross', 'Geller', '29', 'Security', '19500', 'Security Staff', 'Helen');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('550', 'Lincoln', 'Brand', '48', 'Marketing', '90000', 'Seller', 'Helen');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('466', 'Ted', 'Johnson', '27', 'Accounting', '9200', 'Accountant', 'Richard');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`, `boss`) VALUES ('844', 'Daniel', 'Tompson', '55', 'Marketing', '50000', 'Supplier', 'Stephen');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`) VALUES ('155', 'Antony', 'Felas', '39', 'Customer', '44000', 'Seller');
INSERT INTO `real_app_1`.`employee` (`emp_id`, `emp_name`, `emp_surname`, `age`, `department`, `salary`, `job_title`) VALUES ('250', 'Marry', 'Sun', '57', 'H&R', '38000', 'Recruiter');
-- Select employee name AS  worker
SELECT emp_name AS worker FROM employee;
--  Select employees where age less than 45 || Bigger than 25 ||  Where salary less than 5000
SELECT * FROM employee WHERE age < 45;
SELECT * FROM employee WHERE age > 25;
SELECT * FROM employee WHERE salary < 5000;
-- Where age is not 45  || age is not 55 
SELECT * FROM employee WHERE age <> 45;
SELECT * FROM employee WHERE age != 55;
-- Create a table
CREATE TABLE apple(
	id INT NOT NULL AUTO_INCREMENT,
	color VARCHAR(15),
    size CHAR,
    PRIMARY KEY(id)
);
-- Drop column
ALTER TABLE apple DROP size;
-- Describe Table columns
DESCRIBE apple;
-- Add coulmn to table
ALTER TABLE apple ADD weight INT;
-- Change data type of a column
ALTER TABLE apple CHANGE weight weight DECIMAL;
ALTER TABLE apple MODIFY COLUMN weight INT;
-- Drop one table
DROP TABLE apple;
-- Show Columns of table
SELECT * FROM employee;
-- Show all tables
SHOW TABLES;
-- Get me the all  different department names|| different bosses
SELECT DISTINCT department FROM employee;
SELECT DISTINCT boss FROM employee;
-- Get me employees that have salray bigger than 20000 and age bigger than 35
SELECT * FROM employee WHERE salary > 20000 AND age > 35;
-- Get me employees that have marketing department or have boss Mark
SELECT * FROM employee WHERE department='marketing' OR boss='Mark';
-- Get me employees that department is not Customer or salary less than 15000, and age bigger than 45
SELECT * FROM employee WHERE (NOT department='Customer' OR salary < 15000) AND age > 45;
-- Get me employees where department in enginnering,marketing,H&R
SELECT * FROM employee WHERE department IN('engineering', 'marketing', 'H&R');
-- Get me users where name start with L ||    End with Y 
SELECT * FROM employee WHERE emp_name LIKE 'L%';
SELECT * FROM employee WHERE emp_name LIKE '%Y';
-- Get me employee salary is 19000-90000
SELECT * FROM employee WHERE salary BETWEEN 19000 AND 90000;
-- Get me employees who do not have boss
SELECT * FROM employee WHERE boss IS NULL;
-- Make a list with order for salary Descending order
SELECT salary FROM employee ORDER BY salary DESC;
-- Get me first 5 employee that ages bigger than 40 ordered by age
SELECT * FROM employee WHERE age > 40 ORDER BY age LIMIT 5;
-- Get me employee's different names count 
SELECT COUNT(DISTINCT emp_name) FROM employee;
-- Sum all salaries
SELECT SUM(salary) FROM employee;
-- get me average salary
SELECT AVG(salary) FROM employee;
-- Get me minimum salary 
SELECT MIN(salary) FROM employee;
-- Get me maximum age
SELECT MAX(salary) FROM employee;