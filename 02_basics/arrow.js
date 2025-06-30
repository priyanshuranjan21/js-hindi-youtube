// browser k ander sb sa jyda global object h o window object h note and when we run in out system then global object is empty object 
// this.anything  hamara object k ander he kaam kare ge this .something cnnot work under function yaad rkhna note 

// what is the difference between function and arrow function
//  in arrow its not like that we cant use this function and in other function we can use this function its not like that 

// Implicit return: The function returns the result automatically without using the 'return' keyword (works with single expressions)
const addImplicit = (a, b) => a + b;

// Explicit return: The function uses the 'return' keyword to return a value (usually with curly braces)
const addExplicit = (a, b) => {
    return a + b;
};

// Examples:
console.log(addImplicit(2, 3)); // 5
console.log(addExplicit(2, 3)); // 5


// object return krne k liye () braces jrrori h 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
/*
In JavaScript, curly braces {} are used to define a block. 
A block groups multiple statements together, for example in functions, if statements, loops, etc.

Example:
{
    // This is a block
    let a = 10;
    console.log(a);
}

Parentheses () are used for grouping expressions or for function calls/parameters.
 note note But when you use parentheses () in an arrow function to return an object, it tells JavaScript to treat the content as an expression, not a block.

Example:
const getUser = () => ({ name: "hitesh" }); // returns an object

If you use curly braces without parentheses in an arrow function, it is treated as a block, not an object literal.

Summary:
- {} = block (multiple statements)
- () = expression grouping or function parameters
- ({}) in arrow function = return object literal
*/


// this is an important syntax

(function chai() 
//named iife as function name is given 
{
    console.log("Hello from chai function");
})();
// if this type of continious function occure then it will show an error so we have to apply semicolon after that so that it will not show an error which represent that function has terminited 
// same as above things as arrow function
((name) => {
    //unnamed iife as function name is not given
    console.log('Hello from chai arrow function ${name}');
})('prince')//gives same output as only diferent way of writting 






