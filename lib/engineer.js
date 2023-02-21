// Enigneer class
// extends Employee
// github (username)
// getGithub()
// getRole() - overridden to return 'Engineer'

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(github) {
    this.github = github;
  }
  getGithub() {
    console.log(`Github username: ${this.github}`);
  }
  getRole() {
    console.log("Engineer");
  }
}
