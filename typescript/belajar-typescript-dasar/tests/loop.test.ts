describe("loop", function () {
  it("should support for loop", function () {
    const names: string[] = ["Naruto", "Sakura", "Sasuke"];

    // for loop biasa
    for (let i = 0; i < names.length; i++) {
      console.log(names[i]);
    }

    // for of
    for (const name of names) {
      console.log(name);
    }

    // for in
    for (const index in names) {
      console.log(names[index]);
    }
  });
});
