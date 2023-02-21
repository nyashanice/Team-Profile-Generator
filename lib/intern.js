// Intern class
// extends employee
// school
// getSchool()
// getRole() - overridden to return 'Intern'

const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
  getSchool() {
    console.log(`School: ${this.school}`);
  }
  getRole() {
    console.log("Intern");
  }
}
