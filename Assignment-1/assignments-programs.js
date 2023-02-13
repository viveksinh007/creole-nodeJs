// 1. Write a JavaScript program to check two given numbers and return true if one of the number
// is 50 or if their sum is 50

function checkis50(n1, n2) {
  if (n1 + n2 === 50) {
    console.log(`Yay sum is 50 from ${n1} + ${n2} `);
  } else if (n1 === 50 || n2 === 50) {
    console.log(`One of the variables contains 50 as value`);
  } else {
    console.log(
      `Can't do anything with ${n1} and ${n2} because ${n1} or ${n2} not equals 50 or total ${n1} and ${n2} is not equal to 50`
    );
  }
}
console.log("1)");
checkis50(10, 20);

// 2. Write a JavaScript program to check from two given integers, if one is positive and one is
// negative.

function checkisIntPositiveNegative(n1, n2) {
  if (n1 < 0 && n2 > 0) {
    console.log(`${n1} is negative and ${n2} is positive`);
  } else if (n1 > 0 && n2 < 0) {
    console.log(`${n1} is positive and ${n2} is negative`);
  } else if (n1 > 0 && n2 > 0) {
    console.log(`${n1} and ${n2} are both positive `);
  } else {
    console.log(`${n1} and ${n2} are both negative `);
  }
}

console.log("2)");
checkisIntPositiveNegative(10, -20);

// 3. Write a JavaScript program to create a new string adding "Py" in front of a given string. If
// the given string begins with "Py" then return the original string.

function checkStringStartingWithPy(mystring) {
  if (mystring.startsWith("Py")) {
    return mystring;
  } else {
    return "Py" + mystring;
  }
}

let mystring = "Hello, world!";

mystring = checkStringStartingWithPy(mystring);

console.log("3) Py String : ", mystring);

// 4. Write a JavaScript program to compute the sum of the two given integers. If the two values
// are same, then returns triple their sum.

function returnTripleSumIfSameNumber(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) ** 3;
  } else {
    return `${n1} and ${n2} are not equal`;
  }
}

console.log("4) Returning triple sum : ", returnTripleSumIfSameNumber(5, 10));

// 6. Write a JavaScript program to check if a string starts with 'Java' and false otherwise

function checkStringStartingWithJava(mystring) {
  if (mystring.startsWith("Java")) {
    return true;
  } else {
    return false;
  }
}

let mystring2 = "Java is most complex language";

console.log(
  `6) ${
    checkStringStartingWithJava(mystring2)
      ? `true ${mystring2} starts With "Java" `
      : `false`
  }  `
);

// 7. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.

function findLongestWordFromString(myString) {
  let wordarr = myString.split(" ");

  max = Math.max([wordarr.length]);

  const word = wordarr.filter((w) => w.length === max);

  return `${word} with max ${max} length `;
}

// console.log(
//    ${findLongestWordFromString(
//     myString
//   )}`
// );

let ms3 = "JavaScript is most popular language used in many areas ";

console.log(
  `7) Longest word found in string: ${ms3} is : `,
  findLongestWordFromString(ms3)
);

// 8. Write a JavaScript program that accept two integers and display the larger ( customized with many nubers can be entered as arguments to this function)

function findMaximumNumFromTwoInput(n1, n2) {
  if (n1 > n2) return `n1 : ${n1} is greater than n2 : ${n2}`;
  else if (n2 > n1) return `n2 : ${n2} is greater than n1 : ${n1}`;
  else return 1;
}

let op = findMaximumNumFromTwoInput(10, 20);

console.log(`8) ${op === 1 ? `Both Inputs Are Equal` : op}`);

// 9. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert
// box to show the result.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

function findMaximumNumFromFiveNumbers(...nums) {
  const [n1, n2, n3, n4, n5] = nums;

  max = -Infinity;

  if (n1 > max) {
    max = n1;
  }
  if (n2 > max) {
    max = n2;
  }
  if (n3 > max) {
    max = n3;
  }
  if (n4 > max) {
    max = n4;
  }
  if (n5 > max) {
    max = n5;
  }

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] > max) {
  //       max = nums[i];
  //     }
  //   }

  return max;
}

console.log(
  `9) Maximum number from prvided input is : `,
  findMaximumNumFromFiveNumbers(-5, -2, -6, 0, -1)
);

// *
// * *
// * * *
// * * * *
// * * * * *

function printOneSidePyramid(input) {
  for (let i = 0; i < input; i++) {
    let st = "";
    for (let j = 0; j < i; j++) {
      st += "* ";
    }
    console.log(st);
  }
}
console.log("\n10)");
printOneSidePyramid(5);
console.log("\n");

// 11. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let sumHavigBothAsMultiples = 0;
let sum = 0;
function multiplesOf3and5() {
  for (let k = 1; k < 1000; k++) {
    if (k % 3 == 0 || k % 5 == 0) {
      sum += k;
    }
    if (k % 3 == 0 && k % 5 == 0) {
      sumHavigBothAsMultiples += k;
    }
  }

  console.log("11) ");
  console.log("Sum of Number Having 3 or 5 as multiples ", sum);
  console.log(
    "Sum of Number Having 3 and 5 as multiples ",
    sumHavigBothAsMultiples
  );
}

multiplesOf3and5(0, 0);

// 12. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let myColor = ["Red", "Green", "White", "Black"];

console.log(`12)  ["Red", "Green", "White", "Black"] to => `);
console.log(myColor.join(","));
console.log(myColor.join("+"));
