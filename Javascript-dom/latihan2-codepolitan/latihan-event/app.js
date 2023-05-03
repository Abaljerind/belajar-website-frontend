const bClickMe = document.querySelector("#clickme");
const heading = document.querySelector("h1");

// contoh event melalui property dom
bClickMe.onclick = function () {
  console.log("ok");
};

bClickMe.onmouseover = function () {
  console.log("sip");
};

heading.onmouseover = () => {
  console.log("ola");
};

// kalau pakai event melalui property dom diatas, ketika kita ingin menjalankan event yang berbeda di variable yg sama maka event yang pertama akan di replace dengan event kedua.

// berbeda dengan addEventListener yg akan menjalankan kedua event walaupun berbeda functionnya, jadi addEventListener lebih bagus.

const eventbtn = document.getElementById("eventbtn");

eventbtn.addEventListener("click", function () {
  alert("clicked");
});
