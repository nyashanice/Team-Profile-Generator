// Employee class
// parent class
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() (returns 'Employee')

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(`Name: ${this.name}`);
  }
  getId() {
    console.log(`Id: ${this.id}`);
  }
  getEmail() {
    console.log(`Email: ${this.email}`);
  }

  getRole() {
    console.log("Employee");
  }
}

module.exports = Employee;
