const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    let csCount = 0;
    let sweCount = 0;
    let csList = [];
    let sweList = [];

    for (const line of lines) {
      const student = line.split(',');
      if (
        student.length === 4 &&
        student[0] !== '' &&
        student[1] !== '' &&
        student[3] !== ''
      ) {
        if (student[3] === 'CS') {
          csCount++;
          csList.push(student[0]);
        } else if (student[3] === 'SWE') {
          sweCount++;
          sweList.push(student[0]);
        }
      }
    }

    console.log(`Number of students: ${csCount + sweCount}`);
    console.log(
      `Number of students in CS: ${csCount}. List: ${csList.join(', ')}`
    );
    console.log(
      `Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
