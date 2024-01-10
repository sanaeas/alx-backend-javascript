interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jason',
  lastName: 'Parker',
  age: 22,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Anna',
  lastName: 'Hughes',
  age: 20,
  location: 'Tennessee',
};

const studentsList: Student[] = [student1, student2];

const studentsTable = document.createElement('table');
document.body.appendChild(studentsTable);

const tableH = document.createElement('th');
studentsTable.appendChild(tableH);

const firstNameH = document.createElement('td');
firstNameH.textContent = 'First Name';
tableH.appendChild(firstNameH);

const locationH = document.createElement('td');
locationH.textContent = 'Location';
tableH.appendChild(locationH);

studentsList.map((student: Student) => {
  const row = document.createElement('tr');
  studentsTable.appendChild(row);

  const fnCol = document.createElement('td');
  fnCol.textContent = student.firstName;
  row.appendChild(fnCol);

  const locationCol = document.createElement('td');
  locationCol.textContent = student.location;
  row.appendChild(locationCol);
});
