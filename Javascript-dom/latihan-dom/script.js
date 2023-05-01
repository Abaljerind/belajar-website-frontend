// tangkap button
const tUbahWarna = document.getElementById("tUbahWarna");

// tambah addEventListener untuk ubah warna background + toggle
tUbahWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightskyblue";
  document.body.classList.toggle("biru-langit");
});

// untuk menggunakan toggle, kita perlu memainkan function classList.toggle, tapi pertama tama kita perlu membuat class nya dulu di dalam css.

// add button baru
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");

tUbahWarna.after(tAcakWarna);

// tambah event
tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255) + 1;
  const g = Math.round(Math.random() * 255) + 1;
  const b = Math.round(Math.random() * 255) + 1;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

//
// ----------------------------------------------------------------------------

// add const sMerah + event listener untuk mengubah warna merah dengan slider nya
const sMerah = document.querySelector("input[name=sMerah]");

sMerah.addEventListener("change", function () {
  const r = sMerah.value;
  document.body.style.backgroundColor = `rgb(${r},100,100)`;
});
