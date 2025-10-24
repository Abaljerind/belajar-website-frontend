"use strict";
describe("if statement", function () {
    it("should support in typescript", function () {
        const examValue = 90;
        if (examValue > 80) {
            console.log("Good");
        }
        else if (examValue > 60) {
            console.log("Not Bad");
        }
        else {
            console.log("Try Again");
        }
    });
});
