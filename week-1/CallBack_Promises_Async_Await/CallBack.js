// Callbacks =>

// in Simple Way we are passing the function references to function as argument so in function we can call the passed function in future .

// lets assume we need to create a function where it take two number and perform the operation which is passed as function

// Note : You can pass the function in any position in parameter list but think about it first so you can set which argument position will act as callback function

// Here i am taking at last position  cb you can name anything but this is standard pattern

const numberAddition = (a, b) => {
  console.log(`Addition of ${a} and ${b} is : ${a + b}`);
};

function numberSubtraction() {
  let [a, b] = arguments;
  console.log(`Subtraction of ${a} and ${b} is : ${a - b}`);
}

function handleCalCulation(a, b, cb) {
  //   console.log("Main Function Called");
  cb(a, b);
}

handleCalCulation(10, 20, numberAddition);
handleCalCulation(10, 20, numberSubtraction);

// Oh 😑 i forgot to add function for multiplication and division so what should i do 🤔 ?

// 💡 i am passing the function as ref to another function right ?

// let's create an Anonymous function and directly pass at parameter list then see if its working again

// Multiplication => as fat arrow Function

handleCalCulation(5, 2, (a, b) => {
  console.log(`Multiplication of ${a} and ${b} is : ${a * b}`);
});

// Division => as classic Regular Function

handleCalCulation(5, 2, function () {
  let [a, b] = arguments;
  console.log(`Multiplication of ${a} and ${b} is : ${a * b}`);
});

// Note : Did you see something different i am using the "arguments" in regular function and not in arrow function because the arguments is having passed parameter via function and arrow function don't have that features

//callBack Hell 👿

// Test Case write three message 1 after 1 but heres the twist you need to print them in sequence but lets try a simple one without callback hell what happen

// 1 message at 1s
// 2 message at 3s
// 3 message at 2s

const printMessages = () => {
  console.log("\nHello 👋 \n");

  setTimeout(() => {
    console.log("Yay i am First 😁");
  }, 1000);
  setTimeout(() => {
    console.log("i am second 😢", "// What i am Third 😭");
  }, 3000);
  setTimeout(() => {
    console.log("i am Third 😭", "// What i am second 😏");
  }, 2000);
};

// printMessages();

// note : as above code the settimeout with 2s will execute before 3s timeout but i want to execute them consecutive so what should i do 🤔 ?
// 💡 lets call settimeout in settimeout when first is called so second timeout can be execute so they will depend on time and execute in proper order

const printMessagesCbHell = () => {
  console.log("\nHello CallBack Hell 👋  \n");

  setTimeout(() => {
    console.log("Yay I am First 😁");
    setTimeout(() => {
      console.log("I am Second 😢");
      setTimeout(() => {
        console.log("I am Third 😭");
        console.log(
          "\nFinally the messages are print in order with defined time slots 😀 , but this code looks so 😵 so let's improve this by using promises"
        );
      }, 2000);
    }, 3000);
  }, 1000);
};

printMessagesCbHell();
