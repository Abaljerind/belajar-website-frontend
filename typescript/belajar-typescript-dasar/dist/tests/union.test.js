"use strict";
describe("Union Type", () => {
    it("should support in typescript", function () {
        let sample = "naruto";
        console.info(sample);
        sample = 100;
        sample = true;
        console.info(sample);
        // sample = [] // akan error karena tidak pernah di deklarasikan tipe datanya saat variable sample dibuat
    });
    it("should support typeof operator", function () {
        function process(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("Naruto")).toBe("NARUTO");
        expect(process(100)).toBe(102);
        expect(process(false)).toBe(true);
    });
});
