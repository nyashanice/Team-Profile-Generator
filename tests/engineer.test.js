const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github", () => {
      const employee = new Engineer("Jane", 1234, "email@email.com", "janedoe");

      expect(employee.name).toEqual("Jane");
      expect(employee.id).toEqual(1234);
      expect(employee.email).toEqual("email@email.com");
      expect(employee.github).toEqual("janedoe");
    });

    //     it("should throw an error if provided no arguments", () => {
    //       const example = () => new Engineer();

    //       expect(example).toThrow();
    //     });
  });
});
