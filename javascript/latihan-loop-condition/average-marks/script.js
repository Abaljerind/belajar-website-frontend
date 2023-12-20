let students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
];

let average = 0;

for (let i = 0; i < students.length; i++) {
  average += students[i][1];
}

let avgInt = parseInt(average / 5);

console.log("Total nilai rata rata kelima murid adalah " + avgInt);

if (avgInt < 60) {
  console.log("Nilai " + avgInt + " Grade F");
} else if (avgInt < 70) {
  console.log("Nilai " + avgInt + " Grade D");
} else if (avgInt < 80) {
  console.log("Nilai " + avgInt + " Grade C");
} else if (avgInt < 90) {
  console.log("Nilai " + avgInt + " Grade B");
} else if (avgInt < 100) {
  console.log("Nilai " + avgInt + " Grade A");
} else {
  console.log("Silahkan belajar kembali.");
}
