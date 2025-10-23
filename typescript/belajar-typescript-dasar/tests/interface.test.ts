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
});
