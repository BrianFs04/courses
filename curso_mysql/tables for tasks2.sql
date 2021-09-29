CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT,
    depart_name VARCHAR(15) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO deparment (dept_name) VALUES ("Customer"), ("Marketing"), ("Engineering"), ("H&R"), ("Accounting"), ("Security");

CREATE TABLE employee(
	id INT NOT NULL,
	emp_name VARCHAR(15) NOT NULL,
    age INT,
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(department_id) REFERENCES department(id)
);

INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('12', 'Bill', '56', '1');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('55', 'Helen', '22', '2');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('67', 'Pink', '23', '4');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('43', 'Arthur', '78', '2');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('34', 'Sam', '36', '5');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('59', 'Daniel', '16', '1');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('60', 'Lincoln', '62', '6');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('37', 'Ted', '37', '4');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('57', 'Joshua', '17', '5');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('23', 'Adam', '38', '2');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('30', 'Tear', '71', '3');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('78', 'Mark', '21', '1');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('90', 'Antony', '62', '6');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('18', 'John', '80', '5');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('44', 'Perez', '47', '3');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('97', 'Luis', '27', '1');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('126', 'Marry', '26', '6');
INSERT INTO `real_app_2`.`employee` (`id`, `emp_name`, `age`, `department_id`) VALUES ('89', 'Ramirez', '59', '6');

CREATE TABLE nationality(
	id INT NOT NULL,
    n_name VARCHAR(15) NOT NULL, 
    PRIMARY KEY(id)
);

INSERT INTO nationality (id, n_name) VALUES (1, "Italian"), (2, "Canadian"), (3, "American"), (4, "Australian"), (5, "English");

ALTER TABLE employee ADD COLUMN nationality_id INT;

UPDATE `real_app_2`.`employee` SET `nationality_id` = '1' WHERE (`id` = '12');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '3' WHERE (`id` = '18');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '4' WHERE (`id` = '23');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '2' WHERE (`id` = '30');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '5' WHERE (`id` = '34');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '2' WHERE (`id` = '37');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '3' WHERE (`id` = '43');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '4' WHERE (`id` = '44');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '5' WHERE (`id` = '55');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '1' WHERE (`id` = '57');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '5' WHERE (`id` = '59');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '3' WHERE (`id` = '60');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '2' WHERE (`id` = '67');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '3' WHERE (`id` = '78');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '4' WHERE (`id` = '89');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '1' WHERE (`id` = '90');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '2' WHERE (`id` = '97');
UPDATE `real_app_2`.`employee` SET `nationality_id` = '2' WHERE (`id` = '126');

ALTER TABLE employee ADD FOREIGN KEY(nationality_id) REFERENCES nationality(id);

CREATE TABLE country(
	id INT NOT NULL AUTO_INCREMENT,
    c_name VARCHAR(15) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO country(c_name) VALUES ("USA"), ("UK"), ("Australia"), ("Canada"), ("Italy");

ALTER TABLE employee ADD country_id INT;

UPDATE `real_app_2`.`employee` SET `country_id` = '2' WHERE (`id` = '12');
UPDATE `real_app_2`.`employee` SET `country_id` = '3' WHERE (`id` = '18');
UPDATE `real_app_2`.`employee` SET `country_id` = '4' WHERE (`id` = '23');
UPDATE `real_app_2`.`employee` SET `country_id` = '1' WHERE (`id` = '30');
UPDATE `real_app_2`.`employee` SET `country_id` = '4' WHERE (`id` = '34');
UPDATE `real_app_2`.`employee` SET `country_id` = '5' WHERE (`id` = '37');
UPDATE `real_app_2`.`employee` SET `country_id` = '2' WHERE (`id` = '43');
UPDATE `real_app_2`.`employee` SET `country_id` = '3' WHERE (`id` = '44');
UPDATE `real_app_2`.`employee` SET `country_id` = '2' WHERE (`id` = '55');
UPDATE `real_app_2`.`employee` SET `country_id` = '4' WHERE (`id` = '57');
UPDATE `real_app_2`.`employee` SET `country_id` = '1' WHERE (`id` = '59');
UPDATE `real_app_2`.`employee` SET `country_id` = '1' WHERE (`id` = '60');
UPDATE `real_app_2`.`employee` SET `country_id` = '3' WHERE (`id` = '67');
UPDATE `real_app_2`.`employee` SET `country_id` = '2' WHERE (`id` = '78');
UPDATE `real_app_2`.`employee` SET `country_id` = '3' WHERE (`id` = '89');
UPDATE `real_app_2`.`employee` SET `country_id` = '1' WHERE (`id` = '90');
UPDATE `real_app_2`.`employee` SET `country_id` = '5' WHERE (`id` = '97');
UPDATE `real_app_2`.`employee` SET `country_id` = '5' WHERE (`id` = '126');

ALTER TABLE employee ADD FOREIGN KEY(country_id) REFERENCES country(id);



