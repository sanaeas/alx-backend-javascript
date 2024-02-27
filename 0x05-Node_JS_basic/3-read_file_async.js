const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');

        let csCount = 0;
        let sweCount = 0;
        const csList = [];
        const sweList = [];

        for (const line of lines) {
          const student = line.split(',');
          if (
            student.length === 4
            && student[0] !== ''
            && student[1] !== ''
            && student[3] !== ''
          ) {
            if (student[3] === 'CS') {
              csCount += 1;
              csList.push(student[0]);
            } else if (student[3] === 'SWE') {
              sweCount += 1;
              sweList.push(student[0]);
            }
          }
        }

        console.log(`Number of students: ${csCount + sweCount}`);
        console.log(
          `Number of students in CS: ${csCount}. List: ${csList.join(', ')}`,
        );
        console.log(
          `Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`,
        );

        resolve();
      }
    });
  });
}

module.exports = countStudents;
