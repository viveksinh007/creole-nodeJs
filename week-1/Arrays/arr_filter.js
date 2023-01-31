let newArray;

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

let objarr = [
  { ename: "a", age: 10 },
  { ename: "b", age: 20 },
  { ename: "c", age: 30 },
  { ename: "d", age: 25 },
  { ename: "e", age: 35 },
];

const getnamesWithRandomAge = () => {
  return namearray.map((name) => {
    return { ename: name, age: Math.floor(Math.random() * 30) };
  });
};

//Bonus Function for creating a random number array from 1 to limit the number which is passed to the function

const createRandomNumberArray = (limit) => {
  let numarray = new Array();

  for (var i = 0; i < limit; i++) {
    numarray.push(Math.floor(Math.random() * limit));
  }

  return numarray;
};

// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const returnNumberGreaterThanPassedNumbers = (arr, maxnum) => {
  return arr.filter((singleNumber) => (singleNumber >= maxnum ? true : false));
};

console.log(
  returnNumberGreaterThanPassedNumbers(createRandomNumberArray(10), 5)
); /// [6, 8]

// --------------------------------------------------------------------------------------------------------------------------------

// 2) Given an array of numbers, return a new array that only includes the even numbers.

const returnNumberAreEvenOrOdd = (arr, type) => {
  return arr.filter((itm) => (type === "o" ? itm % 2 == 1 : itm % 2 == 0));
};

console.log(
  "Odd or Even ",
  returnNumberAreEvenOrOdd(createRandomNumberArray(10), "o")
);

// --------------------------------------------------------------------------------------------------------------------------------

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const getNamesWhoHaveLessLength = (arr, len) => {
  return arr.filter((itm) => itm.length <= len);
};

console.log("HaveLessLength", getNamesWhoHaveLessLength(namearray, 3));

// --------------------------------------------------------------------------------------------------------------------------------

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// bonus get objects that have club properties if age is greater or equal to 18 then club is true if less then false .

const getObjectwithClubProperty = (objarray, givenage) => {
  return objarray.map((itm) => {
    return { ...itm, club: itm.age >= givenage ? true : false };
  });
};

const getMembersWhoAreBelongToClub = (objarr) => {
  return objarr.filter((itm) => itm.club === true);
};

console.log(
  "BelongToClub",
  getMembersWhoAreBelongToClub(
    getObjectwithClubProperty(getnamesWithRandomAge(), 12)
  )
);
