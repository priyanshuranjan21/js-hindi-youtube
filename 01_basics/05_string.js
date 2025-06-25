// ways to decleare the string is 
let str1 = "Hello, World!"; // using double quotes
let str2 = 'Hello, World!'; // using single quotes
let str3 = `Hello, World!`; // using template literals (backticks)
console.log(str1); // Hello, World!
console.log(str2); // Hello, World!
console.log(str3); // Hello, World!
// Template literals allow for multi-line strings and string interpolation
let name = "priyanshu";
let age = 21;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is John and I am 30 years old.
// String methods
let str = "Hello, World!";
console.log(str.length); // 13, length of the string
console.log(str.toUpperCase()); // HELLO, WORLD!, converts to uppercase
console.log(str.toLowerCase()); // hello, world!, converts to lowercase
console.log(str.indexOf("World")); // 7, finds the index of a substring
console.log(str.slice(0, 5)); // Hello, extracts a substring from index 0 to 5
console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!, replaces a substring
console.log(str.split(", ")); // [ 'Hello', 'World!' ], splits the string into an array
console.log(str.trim()); // Hello, World!, removes whitespace from both ends



const gameName = new String('hiteshhc')
console.log(gameName [0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//give character at 
console.log(gameName.indexOf('t'));//give iindex of character
const newString = gameName.substring(0, 4)
console.log(newString);
const anotherString = gameName.slice(0, 4)
If (newString === anotherString) {
    console.log('both are same');
} else {
    console.log('not same');
}


//some more string inbult function 
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudhary, replaces %20 with -
console.log(url.includes('hitesh')); // true, checks if the string contains 'hitesh'
console.log(url.startsWith('https')); // true, checks if the string starts with 'https'
console.log(url.endsWith('hitesh%20choudhary')); // true, checks if the string ends with 'hitesh%20choudhary'
console.log(url.split('/')); // [ 'https:', '', 'hitesh.com', 'hitesh%20choudhary' ], splits the string by '/'
console.log(url.search('hitesh')); // 8, finds the index of 'hitesh'
console.log(url.lastIndexOf('hitesh')); // 8, finds the last index of 'hitesh'
console.log(url.match(/hitesh/g)); // [ 'hitesh', 'hitesh' ], finds all occurrences of 'hitesh'
console.log(url.concat('/profile')); // https://hitesh.com/hitesh%20choudhary/profile, concatenates '/profile' to the URL

