-- DELETE A COLUMN
ALTER TABLE employee DROP salary;
-- ADD NEW COLUMNS TO THE TABLE
ALTER TABLE employee ADD salary INT, ADD department VARCHAR(20);
-- CHANGE DATA TYPE OF A COLUMN
ALTER TABLE employee CHANGE COLUMN salary salary INT;