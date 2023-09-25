// indexOf() -> mencari kata yang cocok dengan yang diminta, dan mengembalikan posisi awalnya
let text = 'Please locate where "locate" occurs!';
let index1 = text.indexOf("locate");

let index2 = text.indexOf("Please");
let index3 = text.indexOf("where");

// lastIndexOf() -> sama dengan indexOf() tapi posisi yang dikembalikan adalah posisi akhirnya, pencarian dimulai dari akhir kalimat.
let index4 = text.lastIndexOf("Please");
let index5 = text.lastIndexOf("locate");
let index6 = text.lastIndexOf("occurs!");

// parameter kedua disini adalah posisi dimulainya pencarian
let index7 = text.lastIndexOf("locate", 15);
let index8 = text.indexOf("locate", 15);
