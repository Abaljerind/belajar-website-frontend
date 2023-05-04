const button = document.getElementById("changeColor");
const container = document.getElementById("container");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = generateRandomColor();
  e.stopPropagation();
  //   digunakan untuk menghentikkan event dari pembungkus / parent nya untuk menjalankan event nya.
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});

function generateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}
