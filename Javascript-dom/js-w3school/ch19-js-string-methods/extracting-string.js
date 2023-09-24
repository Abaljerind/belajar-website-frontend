// slice(start, end)
let text = "apple, banana, kiwi";
let banana = text.slice(7, 13);
let textLength = text.length;

let kiwi = text.slice(15, 19);

let apple = text.slice(0, 5);

let text1 = "sepeda, motor, mobil";
let text1Length = text1.length;

let sepeda = text1.slice(0, 6);

let motor = text1.slice(8, 13);

let mobil = text1.slice(15, 20);

// slice tanpa end
let nosepeda = text1.slice(8);

// slice dari arah belakang dengan minus
let mobilMinus = text1.slice(-5);

let bananaMinus = text.slice(-12, -6);

let motorMinus = text1.slice(-12, -7);

let sepedaMinus = text1.slice(-20, -14);

let kiwiMinus = text.slice(-4);

let appleMinus = text.slice(-19, -14);

let gadget = "smartphone, laptop, komputer";
let gadgetLength = gadget.length;

let smartphone = gadget.slice(-28, -18);

let laptop = gadget.slice(-16, -10);

let komputer = gadget.slice(-8);

// substring(start, end) -> tidak ada minus, jika kurang dari 0 maka dianggap 0
let buah = "apple, banana, kiwi";
let buahLength = buah.length;

let contoh = buah.substring(7, 13);

// replace()
let textVisit = "Please visit Microsoft";
let newText = textVisit.replace("Microsoft", "Hospital");

// contoh replace dengan case insensitive (/i)
let newText2 = textVisit.replace(/MICROSOFT/i, "w3school");

// contoh replace dengan global match (/g)
let textVisit2 =
  "Please visit Microsoft & Microsoft. Feel free to contact us in Microsoft";
let newText3 = textVisit2.replace(/Microsoft/g, "w3school");

// replaceAll()
let text2 = "I love cats. Cats are very easy to love. Cats are very popular.";
text2 = text2.replaceAll("Cats", "Turtle");
text2 = text2.replaceAll("cats", "turtle");

let text3 =
  "I love to watch tv series, because it is so good. My Favorite series are Prison Break and The Big Bang Theory.";
text3 = text3.replaceAll("tv series", "anime");
text3 = text3.replaceAll("Prison Break", "Bleach");
text3 = text3.replaceAll("The Big Bang Theory", "Naruto");

let text4 =
  "I like to play games, because it's refreshing. My Favorite games are naruto shippuden, valorant, and GTA V";
text4 = text4.replaceAll("like", "love");
text4 = text4.replaceAll("naruto shippuden,", "");
text4 = text4.replaceAll("valorant,", "Dota 2");
text4 = text4.replaceAll("games", "games on pc");
