// DOM Events
// ada 2 tipe:
// 1. Event Handler -> ada 2
// a. inline html attribute, disimpan sebagai atribute html
// b. element method, disimpan sebagai method
// 2. addEventListener()

// ---------------------------------------------------------------

// event handler -> on<event>, contoh: onclick
// memberikan warna background pada p3
const p3 = document.querySelector(".p3");

// membuat function
function ubahWarna() {
  p3.style.backgroundColor = "lightblue";
}
