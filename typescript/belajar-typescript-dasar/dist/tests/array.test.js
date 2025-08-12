"use strict";
describe("Array", () => {
    it("should same with javascript", function () {
        const names = ["naruto", "sasuke", "sakura"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it("should support readonly array", function () {
        const hobbies = ["membaca", "menulis"];
        console.info(hobbies);
        // hobbies[0] = "main main"; // akan error karena hobbies di deklarasikan sebagai ReadonlyArray
    });
    it("should support tuple", function () {
        const person = ["naruto", "uzumaki", 21];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = "sasuke"; // akan error karena person punya property read-only
    });
});
