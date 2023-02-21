// Manager class
// extends employee
// officeNumber
// getRole() - overridden to return 'Manager'

const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
  getRole() {
    console.log("Manager");
  }
}
