-- INSERT COMMAND
INSERT INTO company VALUES(4,"Luisa", 40, 2, "COP", 500);
-- INSERT SOME VALUES
INSERT INTO company(name, age) VALUES("Lisa", 16);
-- CONSTRAINTS using the DEFAULT keyword
CREATE TABLE apple (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) DEFAULT 'Unknown',
    color VARCHAR(10),
    PRIMARY KEY(id)
)
SELECT * FROM apple;
INSERT INTO apple(name, color) VALUES("Normal", "Red");
INSERT INTO apple(color) VALUES("Green");
-- To beautify your code press Ctrl + b
-- Multiple inserts
INSERT INTO apple(name, color) VALUES("z1", "Yellow"), ("z2", "White"), ("z3", "Blue");
-- UPDATE command - Safe update mode
UPDATE apple SET name='new' WHERE id=7;

