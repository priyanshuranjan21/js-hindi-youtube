// looping statement in javascript tell me every things about that 
// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log("for loop iteration:", i);
}

// 2. while loop
let j = 0;
while (j < 5) {
    console.log("while loop iteration:", j);
    j++;
}

// 3. do...while loop
let k = 0;
do {
    console.log("do...while loop iteration:", k);
    k++;
} while (k < 5);

// 4. for...of loop (for arrays and iterable objects)
const arr = [10, 20, 30];
for (const value of arr) {
    console.log("for...of value:", value);
}

// 5. for...in loop (for object properties)
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    console.log("for...in key:", key, "value:", obj[key]);
}

// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


console.log()


//other type of various loop 
//for of loop

// [" "," "," "]//array with various string 
// [{ },{ },{ }]//array with various object


// for off loop syntaxx a shoe=wn below 
// for(const num of arry1)  just ass basic syntax how to use for of loop

// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    


}



// for in loop loop and how to acces elemnt 

// now array with multiple object 



