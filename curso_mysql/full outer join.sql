-- FULL (OUTER) JOIN - Since MySQL does not have a FULL OUTER JOIN
-- this might be a possible solution
SELECT 
    student.student_id,
    student.name AS student_name,
    teacher.id AS teacher_id,
    teacher.name AS teacher_name
FROM
    student
        LEFT JOIN
    teacher ON student.teacher_id = teacher.id 
UNION SELECT 
    student.student_id,
    student.name AS student_name,
    teacher.id AS teacher_id,
    teacher.name AS teacher_name
FROM
    student
        RIGHT JOIN
    teacher ON student.teacher_id = teacher.id;
