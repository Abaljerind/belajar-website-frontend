// buat perulangan dari 1 sampai 100
for (let i = 1; i <= 100; i++) {
  // untuk angka yang bisa dibagi oleh 3 dan 5 ganti jadi text FizzBuzz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);

    // untuk angka yang hanya bisa dibagi 3, ganti jadi Fizz
  } else if (i % 3 === 0) {
    console.log(`Fizz`);

    // untuk angka yang hanya bisa dibagi 5, ganti jadi Buzz
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    // selain 3 dan 5 tadi, tampilkan angka angkanya
    console.log(i);
  }
}
