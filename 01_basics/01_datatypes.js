// "used strict" ; just used for to avoide common mistake and do safer code 
"use strict";
// alert(3+3);
// alert(3+3); // this will not work in strict mode, because alert is not defined in strict mode 

// console.log(3+3); // this will work in strict mode, because console is defined in strict mode

// data types in javascript
// 1. Number
let age = 25; // integer
let height = 5.9; // float
// 2. String
let name = "John Doe"; // single or double quotes
let greeting = `Hello, ${name}`; // template literals (backticks)
// 3. Boolean
let isActive = true; // true or false
// 4. Undefined
let notDefined; // variable declared but not assigned a value
// 5. Null
let emptyValue = null; // explicitly set to no value
// 6. Symbol (ES6 feature)
let uniqueSymbol = Symbol('unique'); // unique identifier
// 7. BigInt (ES11 feature)
let bigNumber = BigInt(123456789012345678901234567890); // large integers

console.table({
  age,
  height,
  name,
  greeting,
  isActive,
  notDefined,
  emptyValue,
  uniqueSymbol,
  bigNumber
});


console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof notDefined); // "undefined"
console.log(typeof emptyValue); // "object" (null is considered an object in JavaScript) this is important  type mostly asked type of empty value  or null value is of object type

