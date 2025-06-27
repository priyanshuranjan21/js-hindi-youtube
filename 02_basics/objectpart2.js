const course={
    name:"js",
    price:100,
    courseinstructor:"priyanshu ranjan"  
}

// course.couresinstructor we are writting priviously which is correct but we can also destructure it
// const couresinstructor=course.courseinstructor; // this is the normal way to access the property
// console.log(couresinstructor); // Output: priyanshuranjan


const couresinstructor=course.courseinstructor;//how to rename the destructured variable name or other way down 
const { courseinstructor: na } = course; // destructuring with ren
console.log(na); // Output: priyanshuranjan


// note the below things the vsrious json formate and how to access the property in json formate
 // we can also destructure the object and rename the variable name
// const { courseinstructor: na } = course; // destructuring with rename
// console.log(na); // Output: priyanshuranjan

// note in jason formate key is actually is a string and value can be string, number, boolean, array, object or null

// various json formate are 1) iside curly braces 2) iside square brackets 3) iside curly braces and square brackets 
// 4) inside curly braces and square brackets and key value pair
// // 5) inside curly braces and square brackets and key value pair and nested objects
// example of json formate
// const jsonData = {
//     "name": "John",
//     "age": 30,          
//     "isStudent": false,
//     "courses": ["Math", "Science", "History"],
//     "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//     }}

//     type 2)
// const jsonArray = [
//     {
//         "name": "John",
//         "age": 30,
//         "isStudent": false
//     },
//     {
//         "name": "Jane",
//         "age": 25,
//         "isStudent": true
//     }
// ];

// // type 3)
// const jsonMixed = {
//     "name": "John",
//     "age": 30,
//     "isStudent": false,     
//     "courses": [
//         {
//             "courseName": "Math",
//             "credits": 3
//         },
//         {
//             "courseName": "Science",
//             "credits": 4
//         }
//     ],
//     "address": {
//         "street": "123 Main St",
//         "city": "Anytown"
//     }
// };  



