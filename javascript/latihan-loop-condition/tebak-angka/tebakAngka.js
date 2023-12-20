// ada 3 kesempatan
let kesempatan = 3;
alert(
  "tebak angka dari 1 - 10 \nanda punya " + kesempatan + " kali kesempatan"
);
kesempatan--;

// komputer membuat angka untuk ditebak menggunakan function random, dari 1 - 10 dan bilangan bulat
let nilaiTebakan = parseInt(Math.random() * 10);

// menentukan rules nya, ada 3 kali kesempatan dan nantinya jika salah akan berkurang kesempatannya
// tiap kali kesalahan, ada teks yang menampilkan nilai nya terlalu rendah atau terlalu tinggi

while (kesempatan >= 0) {
  // menerima inputan dari player
  let tebakan = parseInt(prompt("masukkan angka tebakan anda :"));

  // menampilkan hasil, benar atau salah
  if (tebakan == nilaiTebakan) {
    console.log(`Tebakan BENAR! \nAngka yang dicari ${nilaiTebakan}`);
    break;
  } else if (kesempatan == 0) {
    console.log("Kesempatan habis!");
  } else if (tebakan > nilaiTebakan) {
    console.log(`Tebakan terlalu TINGGI \nAnda punya ${kesempatan} kesempatan`);
  } else if (tebakan < nilaiTebakan) {
    console.log(`Tebakan terlalu RENDAH \nAnda punya ${kesempatan} kesempatan`);
  } else {
    console.log("Nilai yang anda masukkan salah!");
  }

  kesempatan--;
}
