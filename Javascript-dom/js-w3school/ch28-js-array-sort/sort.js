const fruits = [
  "banana",
  "watermelon",
  "orange",
  "kiwi",
  "apple",
  "cherry",
  "mango",
];
console.log(fruits.sort());

// sort() dengan number harus menambahkan perbandingan seperti dibawah ini
const points = [71, 30, 55, 90, 100, 76, 89, 12, 0, 44, 68, 65];
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);

// reverse sort()
console.log(
  points.sort(function (a, b) {
    return b - a;
  })
);

console.log(fruits.reverse());
