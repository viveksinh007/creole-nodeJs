let nameArr = [];

nameArr.push("vivek"); // Added in Last Position => ["vivek"]
nameArr.push("rex"); // => ["vivek" , "rex"]

nameArr.pop(); // It will remove the last element of array => ["vivek"]
nameArr.pop(); // It will remove the last element of array => []
nameArr.pop(); // Nothing Happens because the array is empty already

nameArr.push("lucy"); // Added in Last Position => ["lucy"]
nameArr.unshift("luffy"); // Added in beginning Position => ["luffy","lucy"]
nameArr.shift(); // it will remove the element from begin Position => ["lucy"]

// Some Special Methods

// splice => this method can be used to insert and delete in

// syntax : yourArrVar.splice(start[, deleteCount, elem1, ..., elemN])

let arr = ["I", "study", "JavaScript"];

//For deletion

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]

//For Insertion

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log(arr); // [ 'I', 'JavaScript', 'complex', 'language' ]

// searching in Array

// indexOf( element value of a array ) if found it will return its index if not then it will return -1

let arr1 = [1, 0, false];

console.log(arr1.indexOf(0)); // 1
console.log(arr1.indexOf(false)); // 2
console.log(arr1.indexOf(null)); // -1

// includes( element value of a array ) if found it will return true if not then it will return false

console.log(arr1.includes(1)); // true
console.log(arr1.includes(true)); // false

// for find the element in array

let numarr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find this method will return first output which match the condition

console.log(numarr1.find((itm) => itm > 8)); // 9

// find for array of objects

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id === 1);

console.log(user?.name); // John if found then John if not then undefined

// Sorting => algorithm used algorithm is insertion sort

// for string values

let nameArr2 = ["a", "b", "c", "d", "e", "f"];

console.log(nameArr2.reverse().sort());

// sort this method is used to sort the elements in order this will order the array elements for characters / strings in dictionary formate it will not sort the numbers in order for that we need to modify the code it self

// for regular classic function

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(numarr1.reverse().sort(compareNumeric));

// in simpler way

console.log(numarr1.reverse().sort((a, b) => a - b));
