// singleton 
// two way to crate object one through { } and other through new Object() constructor which refer singleton object 
Object.create(null); // creates an empty object with no prototype that singleton object
// const obj1 = {}; // creates an empty object using object literal syntax
const obj2 = new Object(); // creates an empty object using the Object constructor


// console.log(obj1); // prints the empty object {}


const ptr=Symbol('ptrasdff'); // creates a unique symbol to be used as a property key
// object literal syntax
const person = {
  name: 'John',
  "prince":"priyasnhu",
  age: 30,
  //how to use the above symbol inside the object 
    [ptr]:"priyanshu",
  location: 'New York',
  email:"priyanshuranjan@gmail.com",
  isloggidin:false
}

// way to access object properties
console.log(person.name); // prints 'John'
console.log(person['age']); // prints 30 nice way to access property we will us this only
console.log(person["prince"])//that's why we use this syntex to access object proprty because if we have used person.prince than we cant acess this property 
console.log(person[ptr]); // prints 'priyanshu' using symbol as key .to acces also we will print this way only 

// how to change the object value 
person.name = 'Jane'; // changes the name property to 'Jane'
console.log(person.name); // prints 'Jane'

// how to access function through object
person.greet = function() { //peraion is object name 
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
person.greet(); // prints 'Hello, my name is Jane and I am 30 years

// note we can also use function inside object as a property 
// if we want to reference same object then we can use this keyword same as how we use in others 


// now how we use singleton object or constructor object+++++++++++
// tell me everything about singleton object and constructor object in js
// singleton object is a single instance of an object that is created using the Object constructor or object
// literal syntax. It is a way to create an object without using a class or constructor function.
// The Object constructor is a built-in JavaScript function that creates an object. It can be used to create an empty object or to create an object with properties and methods.
// The object literal syntax is a shorthand way to create an object using curly braces {}. It is a more concise way to create an object compared to the Object constructor.
// Both singleton objects and constructor objects can have properties and methods. properties and key are the same things in ja 

/**note note note  the below syntex will show you you  use function and object  */

let person1 = {
  name: "Priyanshu",
  age: 22,
  greet: function() {
    console.log("Hello " + this.name);
  }
};
person1.greet();      // Output: Hello Priyanshu

// we will do object inside object 
let student = {
  name: "Priyanshu",
  age: 22,
  address: {
    city: "New York",
    country: "USA"
  },
  greet: function () {
    console.log("Hello " + this.name);
  }
};
student.greet();      // Output: Hello Priyanshu
console.log(student.address.city); // Output: New York  how to access object inside object


// to combine two or more objects into a new object,
// we can use object.assign() or the spread operator  
let person2 = {
  name: "John",
  age: 30
};
let address = {
  city: "New York",
  country: "USA"
};
let combined = Object.assign({}, person2, address); // combines person2 and address into a new object good way to combine two or more object as {} is reffered as an empty object 
console.log(combined); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }  


// other way to combine two or more object
let combined2 = { ...person2, ...address }; // using spread operator to combine person2 and address into a new object
console.log(combined2); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA' }

console.log(combined===combined2); // Output: true both are same object as they are combined from same object

// ++++++++ we can also have many object inside array shown with the example below 
let people = [
  {
    name: "Alice",
    age: 25
  },
  {
    name: "Bob",
    age: 30
  },
  {
    name: "Charlie",
    age: 35
  }
];
console.log(people[0].name); // Output: Alice accessing the first object in the array and its name property
console.log(people[1].age); // Output: 30
console.log(people[2]); // Output: { name: 'Charlie', age: 35 } accessing the third object in the array 

// we can also use forEach to iterate over the array of objects  go through important note
people.forEach(person => {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}); 
// Output: Name: Alice, Age: 25
// Output: Name: Bob, Age: 30
// Output: Name: Charlie, Age: 35

// using object.key and object.value we can also iterate over the object properties and values as well as we can print it 
console.log(Object.keys(person)); // Output: [ 'name', 'prince', 'age', 'ptrasdff', 'location', 'email', 'isloggidin', 'greet' ] keys of the object
console.log(Object.values(person)); // Output: [ 'John', 'priyasnhu', 30, 'priyanshu', 'New York', 'priyanshuranjan @gmail.com', false, [Function: greet] ] values of the object




