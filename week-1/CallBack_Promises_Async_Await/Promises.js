// promise A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

// with success

let myFun1 = () => {
  let promise1 = new Promise(function (resolve, reject) {
    resolve("done");

    reject("Oops Error 😢"); // ignored
    setTimeout(() => resolve("…")); // ignored
  });

  return promise1;
};

let promise1 = myFun1();
promise1.then((data) =>
  console.log(
    "\nSuccess Promise - 1 From myFun1 Function\n",
    "Resolved Data 😀 : ",
    data,
    "\n"
  )
);

// with fail

let myFun2 = () => {
  let promise2 = new Promise(function (resolve, reject) {
    reject("Oops 😞 Error occurred "); // ignored
  });

  return promise2;
};

let promise2 = myFun2();
promise2
  .then((data) =>
    console.log(
      "\nFail Promise - 2 From myFun2 Function\n",
      "Resolved Data 😀 : ",
      data,
      "\n"
    )
  )
  .catch((err) => console.log("Error 😰 : ", err));

// simple example to timeout on 1s then console the message
let promiseex1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("2 second timeout"), 2000);
});

promiseex1.then((data) => console.log("Resolved Data 😀 : ", data));

// finally as all language this is executed weather the promise is resolved or rejected it will executed every time for cleanup scripts like rollback the transaction , disconnect to db ,etc.

// simple example for finally clause

let promiseex2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("3 second timeout"), 3000);
});

promiseex2
  .then((data) => console.log("Resolved Data 😀 : ", data))
  .finally(() => console.log("Finally Cleanup Scripts Executed"));
