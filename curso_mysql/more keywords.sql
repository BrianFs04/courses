CREATE TABLE people_list(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(10),
    number INT,
    age DECIMAL(5,2),
    PRIMARY KEY(id)
);

INSERT INTO people_list(name, number) VALUES("Lisa", -12), ("Anna", 12), ("John", 78), ("Karl", -100), ("Pepe", 3), ("Sam", -5), ("Jim", -73), ("Alexa", -45), ("Kelly", -56), ("Luca", 16);

-- SUBSTR - get letters from to (included)
SELECT SUBSTR(name, 1, 3) AS 'first 3 letter' FROM people_list;

-- LEFT - get x number of letters from the left
SELECT LEFT(name, 1) FROM people_list;

-- RIGHT - get x number of letters from the left
SELECT RIGHT(name, 2) FROM people_list;

-- UPPER - everything to uppercase
SELECT UPPER(name) AS "Uppercased names" FROM people_list;

-- LOWER - everything to lowercase
SELECT LOWER(name) AS "Lowercased letters" FROM people_list;

-- LEN -- returns the length
SELECT name, LENGTH(name) FROM people_list;

-- REPLACE -- replace a record
SELECT REPLACE(name, "Pepe", "Annie") FROM people_list;
SELECT * FROM people_list;

-- ABS -- absolute value
SELECT ABS(number) FROM people_list;

-- CEILING -- aproximates to the next decimal
SELECT CEILING(age) FROM people_list;

-- FLOOR -- aproximates to the previous decimal
SELECT FLOOR(age) FROM people_list;

-- ROUND -- rounds the number to the next if it is bigger than 5
SELECT age, ROUND(age, 1) FROM people_list;

-- POWER -- to the power of x number
SELECT number, POWER(number, 2) FROM people_list;

-- SQRT -- square root
SELECT SQRT(100);