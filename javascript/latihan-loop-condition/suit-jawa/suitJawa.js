let tanya = true;
while (tanya) {
  // menangkap pilihan player
  let player = prompt("silahkan pilih: gajah, semut, orang");

  // menangkap pilihan komputer
  // menggunakan function random
  let computer = Math.random();

  if (computer < 0.34) {
    computer = "gajah";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "orang";
  } else {
    computer = "semut";
  }

  // menentukan rules, apa lawan apa hasilnya yang mana yang menang dan yang kalah
  let hasil = "";
  if (player == computer) {
    hasil = "SERI!";
  } else if (player == "gajah") {
    // if (computer == 'orang') {
    //     hasil = 'MENANG!'
    // } else {
    //     hasil = 'KALAH!'
    // }
    hasil = computer == "orang" ? "MENANG!" : "KALAH!";
  } else if (player == "orang") {
    hasil = computer == "gajah" ? "KALAH!" : "MENANG!";
  } else if (player == "semut") {
    hasil = computer == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "memasukkan pilihan yang salah!";
  }

  // tampilkan hasilnya
  alert(
    `Kamu memilih ${player} dan Komputer memilih ${computer} \nMaka kamu ${hasil}`
  );

  //   konfirmasi apakah mau main lagi atau tidak
  tanya = confirm("apakah mau main lagi?");
}

alert("terima kasih sudah bermain");
