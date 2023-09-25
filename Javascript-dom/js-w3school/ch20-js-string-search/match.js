// match() -> mengembalikan data berupa string dengan posisi indexnya dimulai di posisi berapa.
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
// atau
text.match(/ain/);

// match() dengan regEx global
text.match(/ain/g);

// regEx case insensitive
text.match(/ain/gi);
