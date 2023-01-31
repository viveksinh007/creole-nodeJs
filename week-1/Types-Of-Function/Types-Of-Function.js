// Named Functions

function sayHello(arg) {
  return "Hello " + arg;
}

console.log(sayHello("vivek Paliwar"));

// Anonymous Functions

// wee need to store this into a variable then call it

const addNum = function (a, b) {
  return `Addition of ${a} and ${b} is : ${a + b}`;
};

console.log(addNum(2, 7));

// IIFE

const imidiatCall = (() => {
  console.log("Yay 😊 i am called when file loaded");
})();
