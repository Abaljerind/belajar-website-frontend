const button = document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});

const input = document.querySelector("input");
// input.addEventListener("keydown", () => {
//   console.log("tombol ditekan");
// });

// melihat key dan code di keyboard
// input.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

// input.addEventListener("keyup", () => {
//   console.log("tombol dilepas");
// });

// contoh pembatasan dengan keyboard menggunakan switch
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("Tombol panah atas");
      break;
    case "ArrowRight":
      console.log("Tombol panah kanan");
      break;
    case "ArrowDown":
      console.log("Tombol panah bawah");
      break;
    case "ArrowLeft":
      console.log("Tombol panah kiri");
      break;
    default:
      console.log("diabaikan");
  }
});
