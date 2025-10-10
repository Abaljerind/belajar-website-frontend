describe("Type Alias", function () {
    it("should support in Typescript", function () {
        // type alias Category dipanggil
        const category = {
            id: 100, // disini bisa dilihat bahwa value dari attribute id adalah 100 yang mana adalah "number"
            name: "Laptop",
            description: "contoh", // optional properties di isi
        };
        const product = {
            id: "1",
            price: 20000000,
            name: "Sumsang 20s",
            category: category, // yang dipanggil disini adalah object category diatas, bukan type alias Category
            // disini tidak ditambahkan description dan tidak muncul error
        };
        console.info(category);
        console.info(product);
    });
});
export {};
