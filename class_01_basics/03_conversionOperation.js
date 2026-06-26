"use strinct";
let score = "Hassaan";
let score = "123";
let score = "123abc";
let score = false;

console.log(score);
console.log(typeof score);
console.log(typeof(score));

let valueInNumer = Number(score);
console.log(valueInNumer);

// "123" => 123
// "123abc" => NaN
// true => 1, false => 0


let isLoggedIn = "Hassaan"; // true
let isLoggedIn = ""; // false
let isLoggedIn = 1; // true 
let isLoggedIn = 0; // false
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false.
// "" => false 
// "Hassaan" => true 

let someNumber = 25;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
