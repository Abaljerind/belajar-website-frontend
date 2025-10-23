import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";

describe("interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: "1",
      name: "Naruto",
      nib: "1232133",
      npwp: "230231324",
    };

    seller.name = "Toko Konohagakure";
    // seller.npwp = "23234921";

    console.log(seller);
  });

  it("should support function interface", function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }

    const add: addFunction = (num1, num2) => {
      return num1 + num2;
    };

    expect(add(2, 2)).toBe(4);

    console.log(add(2, 3));
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Naruto", "Sasuke", "Sakura"];
    console.log(names);
    console.log(names[0]);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "naruto uzumaki",
      address: "konohagakure",
    };

    expect(dictionary["name"]).toBe("naruto uzumaki");
    expect(dictionary["address"]).toBe("konohagakure");

    console.log(dictionary);
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Naruto",
      division: "Jounin",
    };

    console.log(employee);

    const manager: Manager = {
      id: "2",
      name: "Kakashi",
      division: "Anbu",
      numberOfEmployees: 3,
    };

    console.log(manager);
  });
});
