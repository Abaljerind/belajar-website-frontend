describe("Any", () => {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "naruto uzumaki",
      age: 22,
    };

    person.age = 21;
    person.address = "Konoha";

    console.info(person.age);
    console.info(person.address);
    console.info(person);
  });
});
