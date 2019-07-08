// Q1.javascript - this - output - 7

// What will be the output of the following code ?

let Animal = function(name, type) {
  (this.kind = name), (this.breed = type);
};

let playground = {
  animals: [],

  addAnimal(animal) {
    this.animals.push(animal);
  },

  listAnimalKind(kind) {
    this.animals.forEach(function(animal) {
      if (animal.kind == kind) {
        console.log(animal.breed);
      }
    });
  }
};

playground.addAnimal(new Animal("dog", "Labrador"));
playground.addAnimal(new Animal("dog", "Goldren Retriever'"));
playground.listAnimalKind("dog");

// Q2.javascript - this - output - 8
// What will be the output of the following code ?

let Dream = function(day, mood) {
  this.day = day;
  this.mood = mood;
};

let DreamFactory = {
  dreams: [],

  createDream: function(day, mood) {
    return new Dream(day, mood);
  },

  addDream: function(dream) {
    this.dreams.push(dream);
  },

  listDreams() {
    this.dreams.forEach(function(dream) {
      console.log("You dreamed a " + dream.mood + " dream on " + dream.day);
    });
  }
};

DreamFactory.addDream(DreamFactory.createDream("Sunday", "dark"));
DreamFactory.addDream(DreamFactory.createDream("Monday", "funny"));

DreamFactory.listDreams();

// Q3.javascript - constructors - 1
// 1. Create a ** constructor ** function called `Hero` That will accept a variable ** name ** as an argument.
// 2. Use the ** Hero ** constructor to create an object ** myHero ** with the name 'Link'.

Hero = function(name) {
  this.name = name;
};

let myHero = new Hero("Link");
console.log(myHero);

// Q4.javascript - this & new1
// Look over the below code.Then try to add yourself as a new `person` object, similar to how`myFather` and`myMother` are created.
function person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");
const mySelf = new person("Lara", "Al Hossny", 35, "brown");

console.log(mySelf);

// Q5.song - object
// Create a constructor function called `Song.` `Song` should take in two arguments, `title` and`artist`, which should both be added as properties when the`Song` constructor function is used.The`Song` function should also have a method called`play` on its prototype.When called, the`play` function should console.log the name of that specific song preceded by the word 'Playing:'.

Song = function(title, artist) {
  this.title = title;
  this.artist = artist;
  this.play = function() {
    console.log(`Playing: ${this.title}`);
  };
};

let song1 = new Song("Time", "Pink Floyd");
let song2 = new Song("Sweet Life", "Frank Ocean");
let song3 = new Song("Intro", "M83");
let song4 = new Song("Bloom", "ODESZA");
let song5 = new Song("The Less I Know The Better", "Tame Impala");

song4.play(); //logs 'Playing: Bloom'
song2.play(); //logs 'Playing: Sweet Life'
song3.play(); //logs 'Playing: Intro'

// Q6.javascript - this & new4
// Create a constructor function called cars(shown below).Fill in the blank parts in the constructor using`this`.The cars should have instance "brand", "name", "year" and "price".Also create 3 different objects using the constructor function, initialzing the instances whatever you want.

// cars = function(brand, name, year, price) {
//   this.brand = brand;
//   this.name = name;
//   this.year = year;
//   this.price = price;
// };

function cars(brand, name, year, price) {
  this.brand = brand;
  this.name = name;
  this.year = year;
  this.price = price;
}

const bmw = new cars("bmw", "anything1", 2015, 23000);
const bmw2 = new cars("bmw", "anything2", 2000, 13000);
const bmw3 = new cars("bmw", "anything3", 2018, 34000);
console.log(bmw);

// Q7.javascript - constructors - 2
// 1. Create a ** constructor ** function called `Hero` That will accept the arguments ** name ** and ** occupation **.
// 2. Use ** Hero.prototype ** to add a method ** whoAreYou ** that will return: `My name is [the hero's name] and I am a [the hero's occupation]`.
// 3. Use the ** Hero ** constructor to create an object ** hero1 ** with the name ** Michaelangello ** and occupation ** Ninja **.
// 4. Use the ** whoAreYou ** method to log to the console ** hero1 ** 's name and occupation.

function Heroo(name, occupation) {
  this.name = name;
  this.occupation = occupation;
}

Heroo.prototype.whoAreYou = function() {
  return `My name is ${this.name} and I am a ${this.occupation}`;
};

let hero1 = new Heroo("Michaelangello", "Ninja");
console.log(hero1);
console.log(hero1.whoAreYou());

// javascript - constructors - 3
// Create a ** constructor ** function called ** arrayString ** that will take as argument an array.This constructor will ** join ** the array to a single string, and store the string in a variable called ** str **.For example, the following code:

// arrayString = new (function(arr) {
//   this.str = arr.join("");
// })();
// let joined = arrayString(["d", "o", "g"]);
// console.log(joined);

function arrayString(arr) {
  this.str = arr.join("");
}
let joined = new arrayString(["d", "o", "g"]);
console.log(joined);

// class arrayString {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   arrayString() {
//     return this.arr.join("");
//   }
// }
// let joined = new arrayString(["d", "o", "g"]);
// console.log(joined.arrayString());

// Q9.javascript - this & new5
// Read over the following code.Then try to add Joffrey, Myrcella and Tomme into the House Lannister(Let's assume Jamie is not the father of these three childen).

function House(symbol) {
  this.symbol = symbol;
  this.lord = undefined;
}
function Person(name) {
  this.name = name;
  this.children = null;
  this.parent = null;
}
Lannister = new House("lion");
Tywin = new Person("Tywin");
Tyrion = new Person("Tyrion");
Cersi = new Person("Cersi");
Jamie = new Person("Jamie");
Lannister.lord = Tywin;

Tywin.children = [Jamie, Cersi, Tyrion];
Jamie.parent = Tywin;
Cersi.parent = Tywin;
Tyrion.parent = Tywin;

Joffrey = new Person("Joffrey");
Myrcella = new Person("Myrcella");
Tomme = new Person("Tomme");

Tomme.parent = Cersi;
Myrcella.parent = Cersi;
Joffrey.parent = Cersi;
Cersi.children = [Tomme, Myrcella, Joffrey];

console.log(Lannister);
console.log(Tywin);
console.log(Cersi);

// Q10.javascript - constructors - 5
// As part of a calendar app, you will need to create an object that, for any given month, will store all the days in that month.
// 1. Create a constructor called`Day(year, month, day)` that will be given a number each for the month, the day and the year.
// 2. Create a function called `getDaysinMonth(year, month)` that will be given a number each for the month and the year.This function will return array of`Day` objects, which will be equal in length to the number of days in the given month.

function Day(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
}
// console.log(Day(1984, 07, 04));

function getDaysinMonth(year, month) {
  let date = new Date(year, month, 1);
  let days = [];

  while (date.getMonth() === month) {
    days.push(new Day(date.getFullYear(), date.getMonth(), date.getDate()));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
let daysInJune2016 = getDaysinMonth(2016, 3);
console.log(daysInJune2016);

// Johnny's Solution
// const getDaysinMonth = (year, month) => {
//   let arr = [];
//   let date = new Date(year, month, 0).getDate();
//   for (let i = 1; i <= date; i++) {
//     arr.push(new Day(i, year, month));
//   }
//   return arr;
// };
// let daysInJune2016 = getDaysinMonth(2016, 6);
// console.log(daysInJune2016);
