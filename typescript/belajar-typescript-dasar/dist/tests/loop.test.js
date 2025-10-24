"use strict";
describe("loop", function () {
    it("should support for loop", function () {
        const names = ["Naruto", "Sakura", "Sasuke"];
        // for loop biasa
        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
        // for of
        for (const name of names) {
            console.log(name);
        }
        // for in
        for (const index in names) {
            console.log(names[index]);
        }
    });
    it("should support while loop", function () {
        let counter = 0;
        while (counter < 10) {
            console.log(counter);
            counter++;
        }
    });
    it("should support do while loop", function () {
        let counter = 0;
        do {
            console.log(counter);
            counter++;
        } while (counter < 10);
    });
});
