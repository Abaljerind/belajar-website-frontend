import { Seller } from "../src/seller";

describe("interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: "1",
      name: "Naruto",
    };

    console.log(seller);
  });
});
