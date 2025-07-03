let score=456;

console.log(typeof(score)); // "number"
console.log(typeof("456")); // "string"
console.log(typeof true); // "boolean"

// to change any type of variable from onee type to another type we can use the following methods

// 1. Number Conversion
let strNumber = "123.45";
let numFromString = Number(strNumber); // Converts string to number
let numFromString2 = parseFloat(strNumber); // Converts string to float
let numFromString3 = parseInt(strNumber); // Converts string to integer
console.log(numFromString); // 123.45
console.log(numFromString2); // 123.45
console.log(numFromString3); // 123
console.log(typeof numFromString); // "number"
console.log(typeof numFromString2); // "number"
console.log(typeof numFromString3); // "number"

// convertion of other form to number is done and below example will tell you some example to do this 
// "33"=>33
// "hello33"=>NaN // Not a Number because this string cannot be converted to a number
// "33hello"=>NaN // Not a Number this is also not a number
// true=>1 // true is converted to 1
// false=>0 // false is converted to 0
// null=>0 // null is converted to 0
// undefined=>NaN // undefined is converted to NaN



/****operations */

let val=10;
sir=-val;
console.log(sir); // -10

// console.log(2+2); 
// console.log(2-2); 
// console.log(2*2); 
// console.log(2/2); 
// console.log(2%2); 
// console.log(2**2); 
// console.log(2**3); // thi means 2 rase to the power 3

// console.log("1" + 2);output // "12" // string concatenation
// console.log(1 + "2");output // "12" // string concatenation
// console.log(1 + 2); // 3 // number addition
// console.log("1" + 2 + 2);output // "122" // string concatenation in this string is the greatest so all concatenation will be done
// console.log(1 + 2 + "2"); // "32" // number addition followed by string concatenation because addition is done first and then string concatenation
// console.log("1" + 2 + 2); // "122" // string concatenation because string is the greatest type
// console.log(1 + 2 + "2");output // "32" // number addition followed by string concatenation because acma script which comes forst is addition and then string so greater is addition forst then through string concate it 

let x = 3;
const y = x++;
// x is 4; y is 3 ;prefix increment means first increment the value of x and then assign it to y and postfix means first assign the value of x to y and then increment it


let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n


