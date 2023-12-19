let s = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
