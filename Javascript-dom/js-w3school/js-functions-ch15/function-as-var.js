function toCelcius(fahrenheit) {
  return (5 / 9) * (fahrenheit * 32);
}

// hasil return dari function disimpan ke dalam variable.
let value = toCelcius(77);

// kalau function sebagai variable maka bisa juga ditulis seperti ini
let text = "Suhu saat ini adalah " + toCelcius(40) + " celcius";
