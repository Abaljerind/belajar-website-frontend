// contoh penggunaan event delegation & contoh penggunaan .container untuk mengambil gambar gambar yang thumb nya agar muncul di gambar yang class jumbo saat gambar thumb nya di klik
const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

container.addEventListener("click", function (e) {
  // cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    // kalau iya, maka ganti src di class jumbo dengan isi dari src target yang di klik
    jumbo.src = e.target.src;
  }
});
