-- Select matching rows between employee and country
SELECT employee.id, employee.emp_name, country.c_name AS country FROM employee INNER JOIN country ON employee.country_id = country.id;

-- Select matching rows between employee and nationality
SELECT employee.id, employee.emp_name, nationality.n_name AS nationality FROM employee INNER JOIN nationality ON employee.nationality_id = nationality.id;

-- Select matching rows between employee and department
SELECT employee.id, employee.emp_name, department.depart_name AS department FROM employee INNER JOIN department ON employee.department_id = department.id;

-- Select everything from employee and matching rows from department
SELECT employee.id, employee.emp_name, department.depart_name AS department FROM employee LEFT JOIN department ON employee.department_id = department.id;

-- Select everything from employee and matching rows from nationality
SELECT employee.id, employee.emp_name, nationality.n_name AS nationatily FROM employee LEFT JOIN nationality ON employee.nationality_id = nationality.id;

-- Select everything from employee and matching rows from country using abbreviation and descending order
SELECT e.id, e.emp_name, c.c_name AS country FROM employee e LEFT JOIN country c ON e.country_id = c.id ORDER BY c.id DESC;

-- Select everything from country and matching rows from employee using abbreviation and ascending order
SELECT e.id, e.emp_name, c.c_name AS country FROM employee e RIGHT JOIN country c ON e.country_id = c.id;

-- Select everything from department and matching rows from employee using abbreviation
SELECT e.id, e.emp_name, d.depart_name AS country FROM employee e RIGHT JOIN department d ON e.department_id = d.id;

-- Select everything from nationality and matching rows from employee 
SELECT e.id, e.emp_name, n.n_name FROM employee e RIGHT JOIN nationality n ON e.nationality_id = n.id;

-- Select everything from employee and matching rows from country and everything from nationality
SELECT e.id, e.emp_name, c.c_name AS country, n.n_name AS nationality FROM employee e LEFT JOIN country c ON e.country_id = c.id RIGHT JOIN nationality n ON e.nationality_id = n.id  ORDER BY c.id DESC; 

-- Select everything from employee and matching rows from country and matching from nationality
SELECT e.id, e.emp_name, c.c_name AS country, n.n_name AS nationality FROM employee e LEFT JOIN country c ON e.country_id = c.id INNER JOIN nationality n ON e.nationality_id = n.id ORDER BY c.id DESC;

-- Select matching from employee and conutry and matching from nationality
SELECT e.id, e.emp_name, c.c_name AS country, n.n_name AS nationality FROM employee e INNER JOIN country c ON e.country_id = c.id INNER JOIN nationality n ON e.nationality_id = n.id ORDER BY c.id DESC;