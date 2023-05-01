// DOM Events
// ada 2 tipe:
// 1. Event Handler -> ada 2
// a. inline html attribute, disimpan sebagai atribute html
// contoh <p class="p3" onclick="ubahWarnaP3()">paragraf 3</p>

// b. element method, disimpan sebagai method
// contoh p2.onclick = ubahWarnaP2;

// 2. addEventListener()

// ---------------------------------------------------------------

// event handler -> on<event>, contoh: onclick
// memberikan warna background pada p3 dengan inline html attribute
const p3 = document.querySelector(".p3");

// membuat function
function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}

function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}

// memberikan warna background pada p2 dengan elemen method
const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;
