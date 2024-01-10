interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [idx: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

interface InterStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements InterStudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
