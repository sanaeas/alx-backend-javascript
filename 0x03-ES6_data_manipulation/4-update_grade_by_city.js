export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  if (!Array.isArray(studentsList) || !Array.isArray(newGrades)) {
    return [];
  }

  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
