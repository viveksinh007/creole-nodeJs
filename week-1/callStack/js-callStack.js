console.log("Hello world!");

console.log(a);

function name1() {
  console.log("name Function");
}

const myFunction = function () {
  console.log("not arrow function");
};

setTimeout(() => {
  console.log("0 sec timer 1");
}, 0);

setTimeout(() => {
  console.log("2 sec timer 2");
}, 2000);

const arrowFunction = () => {
  console.log("arrow function", this);
};

var a = 20;

myFunction();
name1();

arrowFunction();

console.log("End of test");
