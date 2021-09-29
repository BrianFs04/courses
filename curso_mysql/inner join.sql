-- INNER JOIN - Returns records that have matching values in both tables
SELECT 
    student.student_id,
    student.name AS student_name,
    teacher.name AS teacher_name,
    teacher.id AS teacher_id
FROM
    student
        INNER JOIN
    teacher ON student.teacher_id = teacher.id
ORDER BY teacher.name;