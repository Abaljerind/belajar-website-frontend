// search() -> berbeda dengan indexOf() yang bisa menentukan posisi awal pencarian, pada search() tidak bisa.
let text = "Please locate where 'locate' occurs!";
text.search("locate");
// atau
text.search(/locate/);
