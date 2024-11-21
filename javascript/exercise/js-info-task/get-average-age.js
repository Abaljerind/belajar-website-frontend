let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr) {
  return (
    arr.map((age) => age.age).reduce((acc, curr) => acc + curr, 0) / arr.length
  );
}

console.log(getAverageAge(arr));
