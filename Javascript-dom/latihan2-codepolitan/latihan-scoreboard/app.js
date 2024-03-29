const p1Button = document.getElementById("p1-button");
const p2Button = document.getElementById("p2-button");
const p1Display = document.getElementById("p1-display");
const p2Display = document.getElementById("p2-display");
const resetButton = document.getElementById("reset");
const winPointOption = document.getElementById("winpoint");

let p1Score = 0;
let p2Score = 0;

let winPoint = 3;
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

// function reset
function reset() {
  p1Score = 0;
  p2Score = 0;

  p1Display.textContent = 0;
  p2Display.textContent = 0;

  isGameOver = false;
}

resetButton.addEventListener("click", reset);

// winPointOption
winPointOption.addEventListener("change", function () {
  winPoint = parseInt(this.value);
  reset();
});
