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

//   printMessagesCbHell();

// Note : you remember above program where many callback functions are nesting and it looks bad so for improving that we will convert the program into promises so let's Go

const printMessagesPromises = (timer, message) => {
  return new Promise((resolve, reject) => {
    if (Number.isInteger(timer)) {
      setTimeout(() => {
        console.log(`I am Called After ${timer} miliseconds`);
        resolve(message);
      }, timer);
    } else {
      reject(`Provided Timer ${timer} is not Valid.`);
    }
  });
};

const runPrintMessagePromises = () => {
  let p1 = printMessagesPromises(1000, "First Member");
  p1.then((data) => {
    console.log("1", data);
    return printMessagesPromises(3000, "Second Member");
  })
    .then((data) => {
      console.log("2", data);
      return printMessagesPromises(2000, "Third Member");
    })
    .then((data) => console.log("3", data))
    .catch((err) => console.log("Error 😐 : ", err));
};

runPrintMessagePromises();
