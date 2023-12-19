let angkaA = parseInt(prompt("masukkan angka pertama :"));
let angkaB = parseInt(prompt("masukkan angka kedua :"));

if (angkaA > 0 && angkaB > 0) {
  alert("sign nya adalah +");
} else if (angkaA > 0 && angkaB < 0) {
  alert("sign nya adalah -");
} else if (angkaA < 0 && angkaB > 0) {
  alert("sign nya adalah -");
} else if (angkaA == 0 && angkaB == 0) {
  alert("sign nya adalah +");
} else if (angkaA > 0 && angkaB == 0) {
  alert("sign nya adalah +");
} else if (angkaA == 0 && angkaB > 0) {
  alert("sign nya adalah +");
} else {
  alert("sign nya adalah -");
}
