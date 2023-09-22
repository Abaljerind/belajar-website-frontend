// contoh function return
let x = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}

let y = myFunction(2, 4);

function sumFunction(a, b) {
  return a + b;
}

let z = myFunction(4, 2) + sumFunction(4, 2);

// contoh penggunaan function untuk argumen yang berbeda.
let w =
  myFunction(6, 9) +
  sumFunction(5, 2) -
  minusFunction(3, 1) / divideFunction(5, 2) +
  sumFunction(4, 4) +
  myFunction(2, 3);

function minusFunction(a, b) {
  return a - b;
}

function divideFunction(a, b) {
  return a / b;
}
