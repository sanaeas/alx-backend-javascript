const http = require('http');
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

        const result = `Number of students: ${csCount + sweCount}
Number of students in CS: ${csCount}. List: ${csList.join(', ')}
Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`;
        resolve(result);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
