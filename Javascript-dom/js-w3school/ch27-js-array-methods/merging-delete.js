const fruits = ["banana", "apple", "kiwi", "watermelon", "mango", "orange"];
let delBanana = delete fruits[0];
console.log(delBanana);
console.log(fruits);

// dengan delete maka akan meninggalkan ruang / space kosong pada array yang ditempati sebelumnya oleh elemen yang di delete.
// jika dengan shift() atau pop() maka space nya otomatis hilang juga
let popOrange = fruits.pop();
console.log(fruits);

let shiftUndefined = fruits.shift();
console.log(fruits);

// merging with concat()
const members = ["naruto", "sasuke", "sakura"];
const team7 = ["team 7", "kakashi"];
console.log(members.concat(team7));

const members2 = ["kiba", "hinata", "shino"];
const team9 = ["team 9", "kurenai"];
console.log(members2.concat(team9));
