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
});
