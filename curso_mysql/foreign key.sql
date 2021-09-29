-- FOREIGN KEY
CREATE TABLE student (
	student_id INT NOT NULL,
    name VARCHAR(45),
    PRIMARY KEY(student_id)
);

CREATE TABLE teacher (
	id INT NOT NULL,
    name VARCHAR(45),
    PRIMARY KEY(id)
);

ALTER TABLE student ADD COLUMN teacher_id INT;

DESCRIBE student;

ALTER TABLE `demo`.`student` 
ADD INDEX `teacher_id_idx` (`teacher_id` ASC) VISIBLE;
ALTER TABLE `demo`.`student` 
ADD CONSTRAINT `teacher_id`
  FOREIGN KEY (`teacher_id`)
  REFERENCES `demo`.`teacher` (`id`);

DESCRIBE student;

CREATE TABLE student2(
	student_id INT NOT NULL,
    name VARCHAR(12),
    teacher_id INT,
    PRIMARY KEY(student_id),
    FOREIGN KEY(teacher_id) REFERENCES teacher(id)
);