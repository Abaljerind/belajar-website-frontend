let str1 = "javascript";

for (let i = 0; i < str1.length; i++) {
  if ((i + 1) % 2 === 1) {
    str1[i] = "Z";
  }
}

console.log(str1);
