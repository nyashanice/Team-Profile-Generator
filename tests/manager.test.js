const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and office number", () => {
      const employee = new Manager("Jane", 1234, "email@email.com", 105);

      expect(employee.name).toEqual("Jane");
      expect(employee.id).toEqual(1234);
      expect(employee.email).toEqual("email@email.com");
      expect(employee.officeNumber).toEqual(105);
    });
  });
});
