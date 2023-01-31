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

const createRandomNumberArray = (limit) => {
  let numarray = new Array();
  for (var i = 0; i < limit; i++) {
    numarray.push(Math.floor(Math.random() * limit));
  }
  return numarray;
};

module.exports = {
  namearray,
  objarr,
  getnamesWithRandomAge,
  numarr,
  createRandomNumberArray,
};
