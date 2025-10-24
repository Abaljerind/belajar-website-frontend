describe("interface", function () {
    it("should support in typescript", function () {
        const seller = {
            id: "1",
            name: "Naruto",
            nib: "1232133",
            npwp: "230231324",
        };
        seller.name = "Toko Konohagakure";
        // seller.npwp = "23234921";
        console.log(seller);
    });
    it("should support function interface", function () {
        const add = (num1, num2) => {
            return num1 + num2;
        };
        expect(add(2, 2)).toBe(4);
        console.log(add(2, 3));
    });
    it("should support indexable interface", function () {
        const names = ["Naruto", "Sasuke", "Sakura"];
        console.log(names);
        console.log(names[0]);
    });
    it("should support indexable interface for non number index", function () {
        const dictionary = {
            name: "naruto uzumaki",
            address: "konohagakure",
        };
        expect(dictionary["name"]).toBe("naruto uzumaki");
        expect(dictionary["address"]).toBe("konohagakure");
        console.log(dictionary);
    });
    it("should support extends interface", function () {
        const employee = {
            id: "1",
            name: "Naruto",
            division: "Jounin",
        };
        console.log(employee);
        const manager = {
            id: "2",
            name: "Kakashi",
            division: "Anbu",
            numberOfEmployees: 3,
        };
        console.log(manager);
    });
    it("should support function in interface", function () {
        const person = {
            name: "Naruto",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.log(person.sayHello("Sakura"));
    });
    it("should support intersection types", function () {
        const domain = {
            id: "1",
            name: "Itachi Uchiha",
        };
        console.log(domain);
    });
    it("should support type assertions", function () {
        const person = {
            name: "Naruto",
            age: "24",
        };
        const person2 = person;
        console.log(person2);
        console.log(person2.sayHello("Sakura")); // akan error saat dilakukan test
        // console.log(person2.age); // akan muncul error, efek collition
    });
});
export {};
