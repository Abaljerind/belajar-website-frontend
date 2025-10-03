describe("Type Alias", function () {
    it("should support in Typescript", function () {
        // type alias Category dipanggil
        const category = {
            id: "1",
            name: "Laptop",
        };
        const product = {
            id: "1",
            price: 20000000,
            name: "Sumsang 20s",
            category: category, // yang dipanggil disini adalah object category diatas, bukan type alias Category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
