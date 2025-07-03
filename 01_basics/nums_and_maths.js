// in this we will learn about numbers and maths in javascript various function based on the number and maths
const num = 42.789;

// Number functions
console.log(Number.isInteger(num)); // false
console.log(Number.parseInt(num)); // change from float to integer formate ie 42
console.log(Number.parseFloat("123.45abc")); // 123.45
console.log(num.toFixed(2)); // "42.79"
console.log(num.toString()); // "42.789"

// Math functions
console.log(Math.round(num)); // 43
console.log(Math.floor(num)); // 42
console.log(Math.ceil(num)); // 43
console.log(Math.abs(-10)); // 10
console.log(Math.max(1, 5, 10, 3)); // 10
console.log(Math.min(1, 5, 10, 3)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // random number between 0 and 1
console.log(Math.trunc(num)); // 42

//for precision issues with floating point numbers
console.log((0.1 + 0.2).toFixed(2)); // "0.30", toFixed returns a string
console.log(parseFloat((0.1 + 0.2).toFixed(2))); // 0.3, parseFloat converts the string back to a number

// how to use toprecisioon value 
console.log(num.toPrecision(3)); // "42.8", formats the number to 3 significant digits
console.log(num.toPrecision(5)); // "42.789", formats the number to 5 significant digits//note thhis preecision value what are given is an string 

const  num =1000000;
console.log(num.toLocaleString()); // "1,000,000", formats the number with commas as thousands separators
console.log(num.toLocaleString('de-DE')); // "1.000.000", formats the number with periods as thousands separators in German locale
console.log(num.toLocaleString('en-IN')); // "10,00,000", formats the number in Indian numbering system
//these are various formate to do this 

// ++++++++++++++++++++++++MATHS++++++++++++++++++
console.log(Math.PI); // 3.141592653589793, value of PI
console.log(Math.E); // 2.718281828459045, value of Euler's number
console.log(Math.sin(Math.PI / 2)); // 1, sine of 90 degrees


console.log(Math.random());// generates a random number between 0 and 1
// Generate a random number between 1 and 10
console.log((Math.random()*10) + 1);//generates a random number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1);//generates a random integer between 1 and 10
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)// generates a random integer between min and max (inclusive)
// Generate a random number between 0 and 100
console.log(Math.floor(Math.random() * 101)); // generates a random integer between 0 and 100




