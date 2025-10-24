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
    it("should support ternary operator", function () {
        const value = 80;
        const say = value >= 75 ? "Congrats" : "Try Again!";
        console.log(say);
    });
    it("should support switch statement", function () {
        function sayHello(name) {
            switch (name) {
                case "Naruto":
                    return "Hi Naruto";
                    break;
                case "Sakura":
                    return "Hi Sakura";
                    break;
                default:
                    return "Hi!";
                    break;
            }
        }
        console.log(sayHello("Naruto"));
        console.log(sayHello("Sakura"));
        console.log(sayHello("Sasuke"));
    });
});
