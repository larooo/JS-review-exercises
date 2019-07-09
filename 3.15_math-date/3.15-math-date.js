// 1. Random Number
// Create a function to return a random integer.

function mathRandom() {
  return Math.random();
}
console.log(mathRandom());

// 2. Lowest Number
// Create a function that takes an array as an argument and returns the number with the lowest value.

function mathLowest(arr) {
  return Math.min(...arr);
}
let arr = [23, 456, 9, 4343];
console.log(mathLowest(arr));

// 3.The Power Of
// Create a function that takes two numbers as arguments.Return the value of the first number to the power of the second number.

function powerOf(a, b) {
  return Math.pow(a, b);
}
console.log(powerOf(2, 4));

// 4.Highest Number
// Create a function that takes an array as an argument and returns the highest number in that array.
let arr1 = [23, 456, 9, 4343];
function mathHighest(arr) {
  return Math.max(...arr);
}
console.log(mathHighest(arr1));

// 5. Pi
// Create a function that given a number n, returns PI to n decimal places.
//     Examples:
// - myPi(5) ➞ 3.14159 //5 decimal places
// - myPi(4) ➞ 3.1416 //4 decimal places
// - myPi(15) ➞ 3.141592653589793 // 15 decimal places

const myPi = num => Number(Math.PI.toFixed(num));
console.log(myPi(5));

// Random Name
// Create a function for our webdev class 13b that returns a random student's name.
let classNames = ["Arutro", "Joseph", "Vassia", "Nizar", "Deins"];
const randomName = () => classNames[Math.floor(Math.random() * 5)];

console.log(randomName());

/////////Date Object
// 1. What day is it ?
//     Create a function to to display the current date and time in the following format: Today is Wednesday.The current time is 1PM: 34 : 59.

const whatDayIsIt = () => {
  let WeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let today = new Date();
  let todayName = WeekDays[today.getDay()];
  let todayHour =
    today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
  let todayMinutes = today.getMinutes();
  let todaySeconds = today.getSeconds();
  let pmOrAm = today.getHours > 12 ? "PM" : "AM";
  return `Today is ${todayName}. The current time is ${todayHour}${pmOrAm}: ${todayMinutes}: ${todaySeconds}`;
};

console.log(whatDayIsIt());

// 2. Date Formats
// Create a function to display the current date in the following formats dd - mm - yyyy, dd / mm / yyyy.

const timeFunction = () => {
  let today = new Date();
  console.log(today.toLocaleDateString()); // 7/9/2019
  console.log(today.toLocaleDateString().replace(/\//g, "-")); //7-9/2019
};

timeFunction();

// 3. Is New Year's day a Sunday?
// Create a function to check whether the 1st of January is a Sunday between the years of 2014 and 2050.

const newYearDay = () => {
  let years = [];
  for (let i = 2014; i <= 2050; i++) {
    let test = new Date(`${i}-01-01`);
    if (test.getDay() === 0) {
      years.push(i);
    }
  }
  return years;
};
console.log(newYearDay());

// 4. How many days till Christmas ?
//     Create a function to calculate the days till Christmas.

const tillChristmas = () => {
  let today = new Date();
  let christmas = new Date("2019-12-24");
  let days = Math.floor((christmas - today) / 86400000);
  return `(${days}  days till Christmas `;
};

console.log(tillChristmas());

// Days in a month

// Create a function to calculate the number of days in a specified month.
// Examples and Expected Output:

// - getDaysInMonth(1, 2012); --> 31
// - getDaysInMonth(2, 2012); --> 29
// - getDaysInMonth(9, 2012); --> 30
// - getDaysInMonth(12, 2012); --> 31

const getDaysInMonth = (m, y) => new Date(y, m, 0).getDate();
console.log(getDaysInMonth(7, 1984));
