"use strict";
describe("Optional Parameter", function () {
    it("should support null and undefined", function () {
        function sayHello(name) {
            if (name) {
                // jika name nya bernilai true atau ada isinya
                console.log(`Hello ${name}`);
            }
            else {
                // jika name false atau tidak ada isinya, misal null atau undefined
                console.log("Hello");
            }
        }
        sayHello("Naruto");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
