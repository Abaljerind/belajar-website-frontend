// tangkap button
const tUbahWarna = document.getElementById("tUbahWarna");

// tambah addEventListener untuk ubah warna background + toggle
tUbahWarna.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "lightskyblue";
  document.body.classList.toggle("biru-langit");
});

// untuk menggunakan toggle, kita perlu memainkan function classList.toggle, tapi pertama tama kita perlu membuat class nya dulu di dalam css.
