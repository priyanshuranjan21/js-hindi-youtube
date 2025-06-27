// Syntax	Example
// Declaration	function foo() {}
// Expression	const foo = function() {}
// Arrow Function	const foo = () => {}
// Parameters/Arguments	function foo(a, b) {}
// Return Value	return a + b;
// Default Parameter	function foo(a = 1) {}
// Rest Parameter	function foo(...args) {}
// Callback Function	function foo(callback) { callback(); }


// in java script empty string is falsy value and undefined value is also falsy value and null value is also falsy value by default 



function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // we can also destructure the object and rename the variable name
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);//
}

 handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

function returnSecondValue(getArray){

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


// ... is rest operator and as well as spread operator in javascript only three dot 
