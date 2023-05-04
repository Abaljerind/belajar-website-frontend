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

// contoh penggunaan event input & change
// input.addEventListener("change", (e) => {
//   console.log("input berubah");
// });

input.addEventListener("input", (e) => {
  document.querySelector("h1").innerText = input.value;

  console.log("input berhasil");
});

// akhir contoh prevent-default

//
// event delegation

// contoh event delegation -> ketika suatu interaksi yang user lakukan dengan sejumlah besar element child yang dibungkus di dalam element parent nya. 'maka kita membuat event listener nya di element parent nya', BUKAN pada setiap element child nya secara individu.

// event dibawah ini hanya akan menghapus list ketika list nya di klik, dimana datanya diambil berdasarkan id note dengan tag html nya 'ul'. intinya kalau yang diambil adalah element parent nya maka element anak / child nya akan bisa diakses juga dengan menggunakan 'e.target.nodeName'
list.addEventListener("click", function (e) {
  // console.log(e.target.nodeName);

  // hanya menghapus element yg nama nodeName nya = 'LI'
  e.target.nodeName === "LI" && e.target.remove();
  // console.dir(e.target);

  // kalau mau menghapus semua elemen yang ada di dalam tag 'ul' yang id nya 'note' bisa dengan code dibawah
  // e.target.remove();
});
