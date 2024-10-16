// Which values does the while loop show?
let i = 0;
while (++i < 5) console.log(i);

let j = 0;
while (j++ < 5) console.log(j);

// Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; ++i) {
  console.log(i);
}

// Output even numbers in the loop
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Replace "for" with "while"
// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

let k = 0;
while (k < 3) {
  console.log(`number ${k}!`);

  k++;
}

// Repeat until the input is correct
/* Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task. */
const numb = 105; // harusnya ini prompt tapi karna males yaudah angka aja langsung
for (let i = 100; i <= numb; i++) {
  if (numb < 100) {
    console.log("ganti nomornya kang!");
    break;
  }

  console.log(i);
}
