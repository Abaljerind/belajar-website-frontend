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
