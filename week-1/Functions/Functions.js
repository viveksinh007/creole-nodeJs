// Simple Function Without any Parameters

function sayHello() {
  console.log("Hello everyone!");
}

sayHello();

// Parameterized functions

function showMessage(from, text) {
  // parameters: from, text
  console.log(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)

//  Expression functions

// A fancy function in js with expression is like shown below

const myFancyFunction = function () {
  console.log("Hello i am a Expression function");
};

myFancyFunction();

//Note : Above function can be refined into arrow functions that is most used function pattern in js

//Arrow functions 😎 Way better ( Knowns as Fat arrow functions)

const arrowFun = () => {
  console.log("Hello i am a Expression function");
};

arrowFun();
