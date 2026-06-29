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

"123" => 123
"123abc" => NaN
true => 1, false => 0


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

let str1 = "Hassaan";
let str2 = " Mahmood";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 1 + 2);
console.log(1 + 1 + "2");
console.log((3 + 4) * 5 % 3);

console.log(+true); // 1
console.log(+false); // 0
console.log(typeof +""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 3;
console.log(num1, num2, num3);

let counter = 0;
counter++;
++counter;
console.log(counter); // 1
console.log(counter++); // 0
console.log(counter); // 1
console.log(++counter); // 1
