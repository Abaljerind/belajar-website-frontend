let star = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);

let bintang = "";

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    bintang = bintang + "*";
  }
  bintang += "\n";
}

console.log(bintang);
