// Map
// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

let numarr = [1, 2, 3, 4];

let namearray = [
  "john",
  "lucy",
  "fred",
  "rex",
  "mike",
  "vivek",
  "luffy",
  "sjw",
];

let newArray = numarr.map((singleItem) => singleItem * 2);

console.log(newArray);

let objarr = [
  { ename: "a", age: 10 },
  { ename: "b", age: 20 },
  { ename: "c", age: 30 },
  { ename: "d", age: 25 },
  { ename: "e", age: 35 },
];

//only giv + to name where age is above 10

newArray = objarr.map((singleItem) =>
  singleItem.age > 10
    ? { ...singleItem, ename: singleItem.ename + "+" }
    : singleItem
);

console.log(newArray);

//only convert the number to string if number is even

newArray = numarr.map((singleItem) =>
  singleItem % 2 === 0 ? singleItem + "" : singleItem
);

console.log(newArray);

// Capitalize each of an array of names

newArray = namearray.map((singleItem) => {
  return singleItem[0].toUpperCase() + singleItem.slice(1);
});

console.log(newArray);

// Make an array of strings of the names from provided arr of objects

newArray = objarr.map((singleItem) => singleItem.ename);

console.log(newArray);

// Make an array of strings of the names saying whether or not they can go to The rollercoaster ride.  ( age  > 10)

// bonus create dynamically objects with provided names array and randomly assigned the age to them

//bonus work

objarr = getnamesWithRandomAge();

function getnamesWithRandomAge() {
  return namearray.map((name, index) => {
    return { ename: name, age: Math.floor(Math.random() * 30) };
  });
}

console.log(objarr);

newArray = objarr.map((obj) => {
  return obj.age > 10
    ? `${obj.ename} can go for ride 😊`
    : `sorry ${obj.ename} cannot go for ride 😢`;
});

console.log(newArray);

// Make an array of the names in h1s, and the ages in h2s

newArray = objarr.map((obj) => {
  return `<h1> ${obj.ename} </h1> <h2> ${obj.age} </h2>`;
});

console.log(newArray);
