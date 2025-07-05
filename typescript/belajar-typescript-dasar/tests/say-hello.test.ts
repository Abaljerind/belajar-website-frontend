import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello naruto", function () {
    expect(sayHello("naruto")).toBe("Hello naruto");
  });
});
