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

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      /* return value untuk implementasi nya, optional untuk ditulis.
      wajib dibuatkan implementasi nya, dengan tipe data untuk parameter dan return value nya any,
      kalau tidak ada implementasi nya, maka kedua function diatas akan menampilkan pesan error. */
      if (typeof value === "string") {
        // perlu melakukan pengecekkan apakah tipe data value nya ini number atau string.
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe("Naruto")).toBe("NARUTO");
  });

  it("should support function as parameter", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    // invoke using named function
    expect(sayHello("naruto", toUpper)).toBe("Hello NARUTO");

    // invoke using anonymous function
    console.log(
      sayHello("sasuke", function (name: string): string {
        return name.toUpperCase();
      })
    );

    // invoke using arrow function
    console.log(sayHello("sakura", (name: string): string => name.toUpperCase()));
  });
});
