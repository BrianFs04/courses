-- LEFT (OUTER) JOIN - Returns all records from the left table and the matched records from the right table
-- All things from the left table and matching values form the right
SELECT 
    student.student_id,
    student.name AS student_name,
    teacher.name AS teacher_name,
    teacher.id AS teacher_id
FROM
    student
        LEFT JOIN
    teacher ON student.teacher_id = teacher.id
ORDER BY teacher.name;