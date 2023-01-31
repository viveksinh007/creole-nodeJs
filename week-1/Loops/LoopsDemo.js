// While Loop

// => Write A program to count the digits of Given Number

function digitCount(num) {
  var count = 0; //return 1 for pow=0

  if (Number.isInteger(num)) {
    while (num != 0) {
      num = Math.floor(num / 10);
      count++;
    }
    return count;
  }

  return "Given Input is Not A number";
}
console.log(digitCount(8367)); //4
console.log(digitCount(563349)); //6

// For Loop

// => Write a JS code to find the largest number in an array
// Program to find the largest number in the given 1D array.

var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

var largest = arr[0];
for (var i = 0; i < arr.length; i++) {
  largest = arr[i] > largest ? arr[i] : largest; //Check largest number
}
console.log(largest); //567

//do-while loop

// Console The Array Values

console.log("\n Do While \n");
let k = 0;
do {
  console.log(arr[k]);
  k++;
} while (k < arr.length);
