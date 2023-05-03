const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  //   console.log("submitted");
  //   console.log(e);

  //   preventDefault() => untuk mencegah behaviour dari suatu elemen agar tidak dijalankan, misal pada form dengan action="/destination" biasanya setelah di klik button nya akan mengirim data sekaligus berpindah halaman ke /destination, tapi dengan preventDefault() yang terjadi "hanya ada" pengiriman data saja 'tanpa' berpindah halaman.
  e.preventDefault();
  console.log("terkirim");
});

// contoh preventDefault() pada tag a
document.getElementsByTagName("a")[0].addEventListener("click", (e) => {
  e.preventDefault();
  console.log("tidak berpindah halaman");
});
