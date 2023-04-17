// DOM SELECTION part 2

// document.querySelector()
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// document.querySelectorAll() -> nodelist
// karna nodelist nilai return-nya, maka kita perlu tambahkan index untuk penggunaannya.
// const p = document.querySelectorAll("p");

// p[2].style.backgroundColor = "lightblue";

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// -----------------------------------------------------
// contoh mengubah root node dari document ke node lain

// CARA 1
// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");

// OR
// CARA 2
const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];

p4.style.backgroundColor = "orange";
