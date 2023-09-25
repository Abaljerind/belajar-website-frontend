// startsWith() -> mengembalikan true jika sebuah string dimulai dengan value yang dicari.
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
text.startsWith("hello");
text.startsWith("universe");
text.startsWith("welcome");

// dengan posisi kata yang berbeda di awal kata yang dicari
text.startsWith("world", 6);
text.startsWith("to the", 21);

// endsWith() -> kebalikan dari startsWith()
let fullName = "John Doe";
fullName.endsWith("Doe");
fullName.endsWith("John");

// dengan posisi kata yang berbeda di akhir kata yang dicari
text.endsWith("to the", 27);
text.endsWith("to the universe", 36);
text.endsWith("world", 11);
