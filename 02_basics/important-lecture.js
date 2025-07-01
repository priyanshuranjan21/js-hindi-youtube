// this basically consist of everything about filer and map function with and without array function hw to use with example

// let result = array.filter(element => condition);
let number1 = [1, 2, 3, 4, 5, 6];

let evens = number1.filter(num => num % 2 === 0);
console.log(evens); // 👉 [2, 4, 6]

// let result = array.map(element => modifiedValue)


let number2 = [1, 2, 3, 4];

let squared = number2.map(num => num * num);
console.log(squared); // 👉 [1, 4, 9, 16]

let students = [
  { name: "Priyanshu", marks: 80 },
  { name: "Ravi", marks: 45 },
  { name: "Anjali", marks: 75 }
];

let topStudents = students
  .filter(stu => stu.marks >= 50)
  .map(stu => stu.name);

console.log(topStudents); // 👉 ["Priyanshu", "Anjali"]





// | Method   | Action       | Changes Value? | Returns            |
// | -------- | ------------ | -------------- | ------------------ |
// | `filter` | Pick items   | ❌ No           | New filtered array |
// | `map`    | Change items | ✅ Yes          | New modified array |


//how to use forEach and map function

const coding=["js","ruby","java","c++","c","react"]
const value=coding.forEach((coding)=>{return item})
console.log(value)

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);



