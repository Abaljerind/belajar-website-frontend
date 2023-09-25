// startsWith() -> mengembalikan true jika sebuah string dimulai dengan value yang dicari.
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
text.startsWith("hello");
text.startsWith("universe");
text.startsWith("welcome");

// dengan posisi kata yang berbeda
text.startsWith("world", 6);
text.startsWith("to the", 21);
