/*
In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:

    name: A string representing the band name.
    nationality: A string representing the country the band comes from.
    genre: What type of music the band plays.
    members: A number representing the number of members the band has.
    formed: A number representing the year the band formed.
    split: A number representing the year the band split up, or false if they are still together.
    albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
        name: A string representing the name of the album.
        released: A number representing the year the album was released.

Include at least two albums in the albums array.
Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.
*/

const onePiece = {
  name: "One Piece X",
  nationality: "Pluto",
  genre: "Anime",
  members: 9,
  formed: 1997,
  split: 3,
  albums: [
    {
      name: "Kimi no Namae Wa",
      released: 2015,
    },
    {
      name: "Fight Together",
      released: 2014,
    },
  ],
};

const date = new Date();
const bandInfo = `Lorem ${onePiece.name} dolor sit amet, ${
  onePiece.nationality
} adipisicing elit. ${
  date.getFullYear() - onePiece.formed
} pariatur, laborum labore ${onePiece.albums[0].name} placeat ${
  onePiece.albums[0].released
} deleniti necessitatibus temporibus accusamus dolor cupiditate.`;

console.log(bandInfo);

// create object using constructor
function Person(name) {
  this.name = name;
  this.introductionSelf = function () {
    return `Hi! I'm ${this.name}.`;
  };
}

// calling Person() as a constructor
const naruto = new Person("Naruto");
console.log(naruto.name);
console.log(naruto.introductionSelf());

const sasuke = new Person("Sasuke");
console.log(sasuke.name);
console.log(sasuke.introductionSelf());

// sumOfTripledEvens(array)
/*
PSEUDOCODE:
1. We need to perform an operation only on the even numbers.
2. We need to transform those numbers by multiplying them by 3.
3. Finally, we need to add the result up from the previous transformation.
*/

function sumOfTripledEvens(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfTripledEvens([1, 2, 3, 4, 5]));
