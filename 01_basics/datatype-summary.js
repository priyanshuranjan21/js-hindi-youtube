// primitive data type are call by valuse that means when you copy the value of data is copyed or called not the reference 

// 7 primitive data type 
// Primitive
// 7 types String, Number, Boolearn, null, undefined, Symbol, BigInt
// Reference (Non primitive)
// Array, Objects, Functions

// You don’t have to define the type (like int, string, etc.) of a variable when you declare it.
// JavaScript figures it out at runtime (when the code is running).thats why java script is called a dynamically typed language.

// Data Type	Example	Description
// 1. Number	let x = 10;	Stores integers or decimals (e.g., 10, 3.14)
// 2. String	let name = "Ram";	Stores text (characters or words)
// 3. Boolean	let isOn = true;	Only two values: true or false
// 4. Undefined	let a;	Variable declared but not assigned a value
// 5. Null	let b = null;	Represents intentional absence of value
// 6. Symbol	let id = Symbol();	Unique and immutable value (used for uniqueness)
// 7. BigInt	let big = 123n;	For very large numbers beyond Number limit

let id = Symbol('123')    //symbol data type 
let anotherId = Symbol('123')

console.log(id === anotherId) // false, because symbols are unique note in java script we are using 3 equal sigh to so equal to 
console.log(typeof id) // symbol
const Big = 1234567890123456789012345678901234567890n // BigInt data type, note the 'n' at the end to define it is big int value 

// for non primmitive data type
// Array

let arr = [1, 2, 3, 4, 5] // array data type
console.log(arr[0]) // 1
console.log(arr.length) // 5
// Objects we write object inside curly braces 
let person = {
    name: 'John',
    age: 30,
    isEmployed: true
}
console.log(person.name) // John
console.log(person["age"]) // 30, we can also access object properties using square brackets
console.log(person.isEmployed) // true


// Functions are also objects in JavaScript
function greet() {
    console.log('Hello, World!');
}
greet(); // Hello, World!
// Functions can be assigned to variables
let sayHello = function() {
    console.log('Hello, again!');
};
sayHello(); // Hello, again!


function greet() {}
console.log(typeof greet);  // "function" it is function type 





