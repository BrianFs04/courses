-- RIGHT (OUTER) JOIN
SELECT 
    student.student_id,
    student.name AS student_name,
    teacher.name AS teacher_name,
    teacher.id AS teacher_id
FROM
	student
		RIGHT JOIN
	teacher ON student.teacher_id=teacher.id;