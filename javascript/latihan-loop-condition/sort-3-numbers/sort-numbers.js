// let a = parseInt(prompt("masukkan angka pertama :"));
// let b = parseInt(prompt("masukkan angka kedua :"));
// let c = parseInt(prompt("masukkan angka ketiga :"));
let a = 5;
let b = 10;
let c = 3;

// sorting dengan if, bandingkan nilainya, a dengan b dan a dengan c, lalu b dengan c dan b dengan a, terakhir c dengan a dan c dengan b
// if (a > b && a > c) {
//   if (b > c) {
//     alert(`${a}, ${b}, ${c}`);
//   } else {
//     alert(`${a}, ${c}, ${b}`);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     alert(`${b}, ${a}, ${c}`);
//   } else {
//     alert(`${b}, ${c}, ${a}`);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     alert(`${c}, ${a}, ${b}`);
//   } else {
//     alert(`${c}, ${b}, ${a}`);
//   }
// }

if (a < b && a < c) {
  if (b < c) {
    alert(`${a}, ${b}, ${c}`);
  } else {
    alert(`${a}, ${c}, ${b}`);
  }
} else if (b < a && b < c) {
  if (a < c) {
    alert(`${b}, ${a}, ${c}`);
  } else {
    alert(`${b}, ${c}, ${a}`);
  }
} else if (c < a && c < b) {
  if (a < b) {
    alert(`${c}, ${a}, ${b}`);
  } else {
    alert(`${c}, ${b}, ${a}`);
  }
}
