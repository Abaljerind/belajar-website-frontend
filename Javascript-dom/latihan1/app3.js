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
const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "naruto");

const a = document.querySelector("section#a a");
a.setAttribute("id", "link");

console.log(a.getAttribute("href"));
console.log(judul.getAttribute("id"));

// menghilangkan attribute
// console.log(a.removeAttribute('href'))
