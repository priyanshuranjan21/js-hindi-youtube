//aaray syntax in JavaScript
// Arrays in JavaScript are used to store multiple values in a single variable.
// An array is a special variable, which can hold more than one value at a time.
// Arrays are zero-indexed, meaning the first element is at index 0.
// You can create an array using the array literal syntax, which is a comma-separated list of values enclosed in square brackets `[]`.
// You can also create an array using the `Array` constructor, which is a built-in JavaScript function that creates an array object.            
// Example of array syntax in JavaScript
const array=[1, 2, 3, 4, 5];
console.log(array); // prints the array [1, 2, 3, 4, 5]
console.log(array.length); // prints the length of the array, which is 5
console.log(array[0]); // prints the first element of the array, which is 1

// in JavaScript, arrays can hold any type of data, including numbers, strings, objects, and even other arrays.
const mixedArray = [1, 'two', { three: 3 }, [4, 5]];
console.log(mixedArray); // prints the mixed array [1, 'two', { three: 3 }, [4, 5]]
console.log(mixedArray[1]); // prints the second element of the array, which is 'two'
console.log(mixedArray[2].three); // prints the value of the 'three' property of the object in the third element, which is 3
console.log(mixedArray[3][0]); // prints the first element of the nested array in the fourth element, which is 4    

// array methods in JavaScript
// JavaScript provides many built-in methods for working with arrays, such as `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, and `forEach`
// These methods allow you to add, remove, and manipulate elements in an array.
// Example of array methods in JavaScript
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // adds 6 to the end of the array
console.log(numbers); // prints the array [1, 2, 3, 4, 5, 6]
numbers.pop(); // removes the last element of the array
console.log(numbers); // prints the array [1, 2, 3, 4, 5]
numbers.shift(); // removes the first element of the array and it remove the 1st element 
console.log(numbers); // prints the array [2, 3, 4, 5]
numbers.unshift(1); // adds 1 to the beginning of the array remenber it add the element in the starting  of the array 
console.log(numbers); // prints the array [1, 2, 3, 4, 5]
numbers.splice(2, 1); // removes the element at index 2 (3) from the array
console.log(numbers); // prints the array [1, 2, 4, 5]
const slicedArray = numbers.slice(1, 3); // creates a new array with elements

console.log(numbers.includes(9)); //what does includes do? it checks if the element is present in the array or not and give boolean value 
console.log(numbers.indexOf(4)); // prints the index of the element 4 in the array, which is 2
console.log(numbers); // prints the new array [2, 4]

// importan method slice and splice
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3); // creates a new array with elements from index 1 to index 3 (exclusive)
console.log(arr); // prints the original array [1, 2, 3, 4, 5]
console.log(slicedArr); // prints the new array [2, 3]

const arr1=arr.splice(1, 2); // removes 2 elements starting from index 1
console.log(arr1); // prints the modified array [1, 4, 5]

//nice to understand about slice and splice
let fruits = ["apple", "banana", "cherry", "mango", "grape"];
let sliced = fruits.slice(1, 4);
console.log(sliced);         // ["banana", "cherry", "mango"]
console.log(fruits);         // ["apple", "banana", "cherry", "mango", "grape"]

let spliced = fruits.splice(1, 2);  // Remove 2 items from index 1
console.log(spliced);  // ["banana", "cherry"]
console.log(fruits);   // ["apple", "mango", "grape"] note that the original array is modified in case of splice

// +++++++different between push and concat of array ++++++++++
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];
let pushedArray = arr2.push(...arr3); // push modifies the original array and returns the new length
console.log(arr2.length); // prints [1, 2, 3, 4, 5, 6]
console.log(pushedArray); // prints 6 (the new length of the array)

// to  use is array and from method
let str = "hello";
let arrFromStr = Array.from(str); // converts the string to an array of characters
console.log(arrFromStr); // prints ['h', 'e', 'l', 'l', 'o']        

// is array check given variable is array ar other form and return true and false statements 

console.log(array.from({name: "John", age: 30})); // prints ['name', 'age']

let score1=10;
let score2=20;
let score3=30;
let scoresArray = Array.of(score1, score2, score3); // creates an array
console.log(scoresArray); // prints [10, 20, 30]
