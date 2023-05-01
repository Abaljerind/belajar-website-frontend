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

// add const sMerah, sHijau, sBiru + event listener untuk mengubah warna merah dengan slider nya
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// ----------------------------------------------------------------------------

// kasus mengubah warna background sesuai dengan posisi pointer mouse

document.body.addEventListener("mousemove", function (event) {
  // cara mencari tau posisi mouse
  // console.log(event.clientX);

  // cara mencari ukuran browser
  //   console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
});
