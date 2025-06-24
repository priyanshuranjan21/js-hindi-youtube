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



