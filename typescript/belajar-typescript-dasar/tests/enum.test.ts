import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should support in TypeScript", function () {
    const customer: Customer = {
      id: 1,
      name: "Naruto",
      type: CustomerType.GOLD,
    };

    console.log(customer);
  });
});
