// manipulation innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>naruto uzumaki</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello world!";

// manipulation style
// const judul = document.querySelector("#judul");
// judul.style.color = "salmon";
// judul.style.backgroundColor = "lightblue";

// manipulation attribute
// bisa juga dilakukan di console browser tetapi hasilnya akan hilang saat di reload page nya
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "naruto");

// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");

// console.log(a.getAttribute("href"));
// console.log(judul.getAttribute("id"));

// menghilangkan attribute
// console.log(a.removeAttribute('href'))

// manipulasi class dengan classList
const p2 = document.querySelector(".p2");
// console.log(p2.classList.add("label"));
// console.log(p2.classList.remove("label"));

// console.log(p2.classList.toggle("label"));
// true, kalau tidak ada class label & akan ditambahkan class label
// console.log(p2.classList.toggle("label"));
// false, kalau ada class label & akan dihapuskan class label
