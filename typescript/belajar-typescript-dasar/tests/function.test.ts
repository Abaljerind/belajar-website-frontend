describe("function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Naruto")).toBe("Hello Naruto");

    function printHello(name: string): void {
      console.log(`Hello ${name}`);
    }

    printHello("Sasuke");
  });
});
