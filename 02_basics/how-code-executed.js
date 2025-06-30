// java script execution is single threaded, meaning it can only execute one piece of code at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await syntax. This allows JavaScript to perform tasks like fetching data from a server without blocking the main thread.
// global executionContext  and functional execution contex explation with example
// execution context is a concept in JavaScript that refers to the environment in which a piece of code is executed. It contains information about the variables, functions, and the value of 'this' that are accessible at that point in time. There are two main types of execution contexts: global execution context and functional execution context.
//// 1. Global Execution Context: This is the default context in which JavaScript code runs.
// It is created when the JavaScript engine starts executing the code. In this context, the global object (in browsers, it's `window`) is created, and all global variables and functions are defined. The global execution context is created only once when the script starts running.
//// Example of Global Execution Context:
console.log("Global Execution Context");
var globalVar = "I am a global variable";

// first global execution phase 

// new variable environment and thread inside the box  have two part that is memory phase and execution contex 

// rest things understand from photo in lecture no 25 the flow photo 
