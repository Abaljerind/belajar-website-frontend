let item = prompt(
  "masukkan nama makanan atau minuman: \n (cth: nasi, daging, susu, beef burger, softdrink)"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan atau minuman sehat");
    break;
  case "beef burger":
  case "softdrink":
    alert("makanan atau minuman tidak sehat");
    break;
  default:
    alert("anda memasukkan nama makanan atau minuman yang salah!");
    break;
}
