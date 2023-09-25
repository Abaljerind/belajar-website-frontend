// match() -> mengembalikan data berupa string dengan posisi indexnya dimulai di posisi berapa.
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
// atau
text.match(/ain/);

// match() dengan regEx global
text.match(/ain/g);

// regEx case insensitive
text.match(/ain/gi);

// matchAll() ->
let textCat = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = textCat.matchAll("Cats");

// regEx global & case insensitive
const iterator2 = textCat.matchAll(/Cats/g);
const iterator3 = textCat.matchAll(/Cats/gi);
