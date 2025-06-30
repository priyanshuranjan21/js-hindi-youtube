const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {//how to call object from outside ie object.key(object name).lenght that means if the object is empty then its lenght will be 0
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15  //only for null and undefine 


// What is ?? in JavaScript?
// ?? is called the nullish coalescing operator.

// It returns the first value that is NOT null or undefined

val1 = null ?? 10 ?? 20

// note nullish and terniary operator are different 

let val2;
val2 = null ?? 10 ?? 20;
console.log(val2); // Output?

// How it works:
// null ?? 10 → null is ignored → takes 10

// Then: 10 ?? 20 → 10 is not null or undefined → keeps 10



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")