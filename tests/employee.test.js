const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email", () => {
      const employee = new Employee("Jane", 1234, "email@email.com");

      expect(employee.name).toEqual("Jane");
      expect(employee.id).toEqual(1234);
      expect(employee.email).toEqual("email@email.com");
    });

    // it("should throw an error if provided no arguments", () => {
    //   const example = () => new Employee();
    //   const err = new Error("Must provide valid inputs");

    //   expect(example).toThrowError(err);
    // });
  });
});
