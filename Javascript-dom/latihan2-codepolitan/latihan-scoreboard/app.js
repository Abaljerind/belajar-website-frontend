const p1Button = document.getElementById("p1-button");
const p2Button = document.getElementById("p2-button");
const p1Display = document.getElementById("p1-display");
const p2Display = document.getElementById("p2-display");

let p1Score = 0;
let p2Score = 0;

let winPoint = 5;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winPoint) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winPoint) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});
