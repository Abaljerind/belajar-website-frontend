// variable sum untuk menyimpan angka yang bisa dibagi 3 & 5
let sum = 0;

// buat perulangan dibawah 1000
for (let i = 0; i < 1000; i++) {
  // jika ada angka yang bisa dibagi 3 atau 5
  if (i % 3 == 0 || i % 5 == 0) {
    // jumlahkan sum dengan angka tersebut
    console.log((sum += i));
  }
}

// menampilkan hasil akhir sum yang sudah ditambahkan
console.log(sum);
