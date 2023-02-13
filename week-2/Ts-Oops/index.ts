import { Prompt } from "prompt-sync";

let msg = "Hello World";

msg = "Hello Vivek Welcome to TypeScript World !";

let id = 5;

// using type notation

let myName: string = "Vivek Paliwar";

console.log("My Name is " + myName);

let arr1: number[] = [1, 2, 3, 4];

console.log("Array with only Number Type : ", arr1);

let unionTypeVar: string | number = "unionType Var String | Number "; // let unionTypeVar : string | number = "I am Unique Container Type Which Can Allow Number or String Type Value To Store in Variables"

// interface

interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let Person1: Person = {
  name: "vivek",
  isProgrammer: false,
  location: "Germany",
};

console.log(msg);
console.log(Person1);

// Functions

interface Speech {
  sayHi(name: string): void;
  sayBye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    console.log(`Hi! ${name}`);
  },
  sayBye: (name: string) => `Bye ${name}`,
};

sayStuff.sayHi("Vivek"); // Hi Heisenberg
console.log(sayStuff.sayBye("Lucy")); // Bye Heisenberg

// No need to give Function Type to Function because TypeScript automatically inferred the function type

// Using explicit typing

function haveaAgreateDay(name: string): string {
  return `Wish you Have a Greate Day  ${name} `;
}

// Inferred typing - TypeScript sees that loginMe is a function that always returns a string, so no need to explicitly state it
const loginMe = (name: string): string => {
  return `Welcome! ${name} `;
};

console.log(haveaAgreateDay("Vivek"));

console.log(loginMe("vivek"));

// for regular function old school

// Named function

function add(x: number, y: number): number {
  return x + y;
}

console.log("Add 1 + 2 = " + add(1, 2));

// for Arrow Functions

// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name1: string, name2: string) => void;

// Define the function, satisfying its signature
sayHello = (name1: string, name2: string) => {
  console.log(`Hello ${name1} it's ${name2} From Fairy Tail`);
};

sayHello("Vivek", "Natsu"); // Hello Danny

//Type Aliases and optional properties in one program

// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

type NameObj = {
  firstname: string;
  lastname: string;
  age?: number;
};

const tellYourName = (ob: NameObj): string => {
  const { age, firstname, lastname } = ob;

  if (age != undefined) {
    return `Hello My Name is ${firstname} ${lastname} and i am ${age} old`;
  } else {
    return `Hello My Name is ${firstname} ${lastname} `;
  }
};

console.log(tellYourName({ firstname: "vivek", lastname: "paliwar", age: 21 }));
console.log(tellYourName({ firstname: "Natsu", lastname: "Dragneel" }));

// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:

// type ID = number | string;

type containNovelNameAsString = string;

const myFavoriteNovel: containNovelNameAsString = "Solo Leveling";

console.log(myFavoriteNovel);

// type vs interface

const ob2: NameObj = { firstname: "Bob", lastname: "marly" };

const p3: Person = { isProgrammer: true, location: "india", name: "vivek" };

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
let a: string = "Success";

let x: any = a;
// logs 404
console.log(StatusCodes[x]);

// named destructuring

const g: [cc: number, bb: number] = [1, 2];

const [vv, y] = g;

// index signature

interface StringArray {
  [i1ndex1: number]: string;
}

const myArray: StringArray = {};
myArray[1] = "hello world";

console.log(myArray);

interface NumberDictionary {
  [index1: string]: any;
  [index: number]: number;
  length: string; // ok
  name: number;
}

const my1: NumberDictionary = { length: "10", name: 10 };

my1.Hello = 10;
my1[10] = 100;

console.log("my1 ", my1);

enum Days {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
}

const sunday = 10;

console.log(Days);

console.log(Days[1]);

let numsbools: (string | number)[] = [];

let Tuser: [string, number, boolean];

Tuser = ["1", 1, true];

var prompts: Prompt = require("prompt-sync")();

// console.log("name: ", name);

const askForValue = (message: string) => {
  var myValue: any = prompts(message);

  return myValue;
};

var mark1 = askForValue("Enter Your Math Marks : ");

console.log(mark1);
