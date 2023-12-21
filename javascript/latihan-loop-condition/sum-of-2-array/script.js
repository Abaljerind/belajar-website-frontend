// buat 2 buah array
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

// buat 2 variable untuk menyimpan nilai hasil penjumlahan tiap elemen array nya
let sum1 = 0;
let sum2 = 0;

// buat perulangan untuk arr_1
for (let i = 0; i < arr_1.length; i++) {
  sum1 += arr_1[i];
}

// buat perulangan untuk arr_2
for (let i = 0; i < arr_2.length; i++) {
  sum2 += arr_2[i];
}

// tampilkan hasilnya sum1 & sum2 di console
console.log(sum1 + sum2);
