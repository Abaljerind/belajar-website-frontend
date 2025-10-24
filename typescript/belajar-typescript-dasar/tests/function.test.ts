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

  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Sakura")).toBe("Hello Sakura");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firstname: string, lastname?: string): string {
      if (lastname) {
        return `Hello ${firstname} ${lastname}`;
      } else {
        return `Hello ${firstname}`;
      }
    }

    expect(sayHello("Naruto")).toBe("Hello Naruto");
    expect(sayHello("Naruto", "Uzumaki")).toBe("Hello Naruto Uzumaki");
  });
});
