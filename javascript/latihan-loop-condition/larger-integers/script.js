let angkaA = parseInt(prompt("masukkan angka pertama :"));
let angkaB = parseInt(prompt("masukkan angka kedua :"));

if (angkaA > angkaB) {
  alert(`Angka pertama ${angkaA} lebih besar dari angka kedua ${angkaB}.`);
} else if (angkaB > angkaA) {
  alert(`Angka kedua ${angkaB} lebih besar dari angka pertama ${angkaA}.`);
} else {
  alert(`Angka pertama dan angka kedua sama.`);
}
