const form = document.querySelector("#form");

// form.addEventListener("submit", function (e) {
//   console.log("submitted");
//   console.log(e);

//   preventDefault() => untuk mencegah behaviour dari suatu elemen agar tidak dijalankan, misal pada form dengan action="/destination" biasanya setelah di klik button nya akan mengirim data sekaligus berpindah halaman ke /destination, tapi dengan preventDefault() yang terjadi "hanya ada" pengiriman data saja 'tanpa' berpindah halaman.
//   e.preventDefault();
//   console.log("terkirim");
// });

// contoh preventDefault() pada tag a
// document.getElementsByTagName("a")[0].addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("tidak berpindah halaman");
// });

// contoh melakukan input data secara realtime tanpa berpindah halaman dengan preventDefault()
const input = document.querySelector("input");
const list = document.querySelector("#note");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  //  input.value untuk mengambil data yg di isikan di dalam input

  //   lalu sekarang generate element li + text nya
  const newList = document.createElement("li");
  newList.innerText = noteValue;

  list.appendChild(newList);

  //   agar input nya kembali kosong setelah kita masukkan text tambahkan code dibawah
  input.value = "";
});
