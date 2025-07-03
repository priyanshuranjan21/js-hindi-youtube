// everythings about dates in js
// Date object
let currentDate = new Date(); // creates a new date object with the current date and time
console.log(currentDate); // prints the current date and time
console.log(currentDate.toString()); // prints the date in a human-readable format  
console.log(currentDate.toISOString()); // prints the date in ISO format
console.log(currentDate.getFullYear()); // gets the current year
console.log(currentDate.getMonth()); // gets the current month (0-11, where 0 is January)
console.log(currentDate.getDate()); // gets the current day of the month (1-31)

let mysate=new Date();
console.log(mysate); 
console.log(mysate.toString()); // prints the date in a human-readable format

console.log(typeof mysate); // "object", Date is an object in JavaScript note date is a type of object 

// note in javascript date start from 0 to 11 that is january is 0 and december is 11

let mynewsate=new Date(2023,9,1,12,0,0); // creates a new date object with the specified date and time
console.log(mynewsate); // prints the specified date and time
console.log(mynewsate.toDateString()); // prints the date in a human-readable format

// note note when we want to display or print date in or if we are writing date in single digit then the jan 
//start from 0 and when we write in dd mm yy formate then jan satert from 1 and decemeber is 12

let mynowdate=Date.now();
console.log(mynowdate); // prints the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(mynowdate.getMonth());

mynowdate.tolocaleString('default'{weekday:LockManager}); // this will not work because mynowdate is a number, not a date object