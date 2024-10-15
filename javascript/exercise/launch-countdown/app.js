const output = document.querySelector(".output");

output.textContent = "";

let i = 10;

for (i; i >= 0; i--) {
  // tiap iterasi maka dibuat juga paragraf baru nya
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent += `Countdown ${i}\n`;
  } else if (i === 0) {
    para.textContent += "Blast Off!";
  } else {
    para.textContent += `${i}\n`;
  }
  output.appendChild(para);
}

console.log(output.textContent);

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
