// DOM MANIPULATION part 2

// --------------------------------------------------------------
// Manipulasi Node: ada banyak caranya tapi yang akan dibahas hanya berikut:

// document.createElement() -> membuat elemen

// document.createTextNode() -> menuliskan apa di dalam node / elemen yang kita buat

// node.appendChild() -> menyimpan / menggabungkan text yang dibuat dengan elemen html yg baru kita buat / dengan elemen dimana kita ingin menambahkan elemen baru nya berada setelah elemen terakhir.

// node.insertBefore() -> sama dengan appendChild diatas, bedanya posisi elemen / text yang kita ingin gabungkan berada sebelum elemen lain, sesuai namanya "insert before".

// parentNode.removeChild()
// parentNode.replaceChild()

// teori pembuatan node => kita buat elemennya dulu, lalu buat isinya berupa teks, lalu kita minta js untuk memasukkan teks tersebut ke dalam elemen dan menyimpannya di dalam body yang kita inginkan.

// --------------------------------------------------------------
// contoh buat elemen baru dengan appendChild

// buat elemen baru
const pBaru = document.createElement("p");

// buat tulisan yang akan disimpan ke dalam pBaru
const teksPBaru = document.createTextNode("Paragraf baru");

// simpan tulisan diatas ke dalam pBaru
pBaru.appendChild(teksPBaru);

// simpan pBaru yang sudah ditambahkan teksPBaru dengan node.appendChild() or node.insertBefore()
const sectionA = document.querySelector("section#a");

sectionA.appendChild(pBaru);
// done, pBaru akan muncul dengan teks Paragraf baru.

// --------------------------------------------------------------
// contoh buat elemen baru dengan insertBefore()

const liBaru = document.createElement("li");

const teksLiBaru = document.createTextNode("item baru");

liBaru.appendChild(teksLiBaru);

// khusus untuk insertBefore(), kita perlu elemen parent / pembungkusnya & juga elemen berikut nya dimana elemen yang kita ingin tempatkan ada di atas / sebelum elemen berikut tersebut.
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);
