// dom selection
// document.getElementById()
const judul = document.getElementById("judul");
judul.style.color = "salmon";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "naruto uzumaki";

// document.getElementsByTagName()
//  -> HTMCollections
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// cara mengakali penggunaan getElementsByTagName agar tidak menghasilkan HTMLCollection, bisa dengan menambahkan index nya seperti dibawah ini.
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName()
// -> HTMLCollections
