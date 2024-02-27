const http = require('http');
const fs = require('fs');

function getStudents(data) {
  const lines = data.split('\n');
  const students = [];
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i] !== '') {
      students.push(lines[i]);
    }
  }
  return students;
}

function countFields(students) {
  const fields = {};
  let info;
  let name;
  let field;
  students.forEach((student) => {
    [name, ...info] = student.split(',');
    field = info[info.length - 1];
    if (!(field in fields)) {
      fields[field] = [];
    }
    fields[field].push(name);
  });
  return fields;
}

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, { encoding: 'utf-8' });
    const students = getStudents(data);
    let message;
    message = `Number of students: ${students.length}`;
    const fields = countFields(students);
    Object.keys(fields).forEach((field) => {
      message += `\nNumber of students in ${field}: ${fields[field].length}. `;
      message += `List: ${fields[field].join(', ')}`;
    });
    return message;
  } catch (err) {
    return 'Cannot load the database';
  }
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2]).then((result) => {
      res.end(`This is the list of our students\n${result}`);
    });
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
