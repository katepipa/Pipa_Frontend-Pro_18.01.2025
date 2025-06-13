console.log("Students Journal");

class Student {
  static attendanceArray = 25;

  constructor(name, surname, birthday, grades) {
    this.name = name;
    this.surname = surname;
    this.birthday = new Date(birthday);
    this.grades = grades || [];
    this.attendance = new Array(Student.attendanceArray).fill(null);
  }

  calculateAge() {
    const today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();
    const month = today.getMonth() - this.birthday.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < this.birthday.getDate())
    ) {
      age--;
    }

    return age;
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) return 0;

    const gradesSum = this.grades.reduce((sum, grade) => sum + grade, 0);
    const averageGrade = gradesSum / this.grades.length;
    return averageGrade;
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.warn("The attendance list is already filled!");
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.warn("The attendance list is already filled!");
    }
  }

  summary() {
    const averageGrade = this.calculateAverageGrade();
    const attendedClasses = this.attendance.filter(
      (attended) => attended === true
    );
    const averageAttendance = attendedClasses.length / this.attendance.length;

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return "Well done!";
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return "Good, but it can be better!";
    } else {
      return "Study harder!";
    }
  }
}

const firstStudent = new Student(
  "Mariia",
  "Voloshyna",
  "2008-04-02",
  [100, 95, 97, 80, 95]
);

for (let i = 0; i < 23; i++) {
  firstStudent.present();
}

for (let i = 0; i < 2; i++) {
  firstStudent.absent();
}

console.log("#1 Student Age: " + firstStudent.calculateAge());
console.log(
  "#1 Student Average Grade: " + firstStudent.calculateAverageGrade()
);
console.log("#1 Student Attendance: " + firstStudent.attendance);
console.log(firstStudent.summary());

const secondStudent = new Student(
  "Mykyta",
  "Borysov",
  "2008-08-02",
  [90, 95, 97, 80, 100]
);

for (let i = 0; i < 21; i++) {
  secondStudent.present();
}

for (let i = 0; i < 4; i++) {
  secondStudent.absent();
}

console.log("#2 Student Age: " + secondStudent.calculateAge());
console.log(
  "#2 Student Average Grade: " + secondStudent.calculateAverageGrade()
);
console.log("#2 Student Attendance: " + secondStudent.attendance);
console.log(secondStudent.summary());

const thirdStudent = new Student(
  "Vladyslava",
  "Sydorenko",
  "2007-10-02",
  [93, 86, 90, 80, 81]
);

for (let i = 0; i < 19; i++) {
  thirdStudent.present();
}

for (let i = 0; i < 6; i++) {
  thirdStudent.absent();
}

console.log("#3 Student Age: " + thirdStudent.calculateAge());
console.log(
  "#3 Student Average Grade: " + thirdStudent.calculateAverageGrade()
);
console.log("#3 Student Attendance: " + thirdStudent.attendance);
console.log(thirdStudent.summary());
