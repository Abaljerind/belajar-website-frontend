let david = 80;
let vinoth = 77;
let divya = 88;
let ishitha = 95;
let thomas = 68;

let average = (david + vinoth + divya + ishitha + thomas) / 5;

if (average < 60) {
  alert(average + " Grade F");
} else if (average < 70) {
  alert(average + " Grade D");
} else if (average < 80) {
  alert(average + " Grade C");
} else if (average < 90) {
  alert(average + " Grade B");
} else if (average < 100) {
  alert(average + " Grade A");
} else {
  alert("Silahkan belajar kembali.");
}
