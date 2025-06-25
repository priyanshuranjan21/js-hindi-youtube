const accountID=12345678
var accountName="John Doe"
let accountBalance=1000.50
// accountID=1654;  not allowed 
accountBalance=2000.75 // allowed, since accountBalance is declared with let
accountName="Priyanshu Ranjan" // allowed, since accountName is declared with var
  let accountitem
console.log("Account ID:", accountID);
console.log("Account Name:", accountName);
console.log("Account Balance:", accountBalance);
// Using console.table to display the variables in a table format
console.table({accountID, accountName, accountBalance, accountitem});
/* preffer not to use var furthur because issue of functional scope and block scope */
