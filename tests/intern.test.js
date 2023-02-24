const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school", () => {
      const employee = new Intern(
        "Jane",
        1234,
        "email@email.com",
        "Georgia Tech"
      );

      expect(employee.name).toEqual("Jane");
      expect(employee.id).toEqual(1234);
      expect(employee.email).toEqual("email@email.com");
      expect(employee.school).toEqual("Georgia Tech");
    });
  });
});
