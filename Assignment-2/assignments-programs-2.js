// 1. Reverse that string
// This one is a classic. Simply reverse the string without using reverse().
// Input -> "I am a string"
// Output -> gnirts a ma I

function reverseThis(inputstr) {
  let str = "";
  for (let i = inputstr.length - 1; i >= 0; i--) {
    str += inputstr[i];
  }
  return str;
}

console.log(reverseThis("I am a String"));

// 2. Remove specific characters from a string
// What’s the most efficient way to strip specific characters from a string? Without using replace().
// Your function must strip multiple different characters from the provided string.
// input -> function("I am an example string", ["a", "x"])
// output -> I m n emple string

function replaceChars(inputstr, parts) {
  let str = "";

  for (let j = 0; j < inputstr.length; j++) {
    if (parts.includes(inputstr[j])) {
      str += " ";
    } else {
      str += inputstr[j];
    }
  }

  return str;
}

console.log(replaceChars("I am an example string", ["a", "x"]));

// 3. Find the most common character within the string. Given any string, find the most commonly occurring character. If there are 2 or more most commonly occurring characters; return the character which comes first alphabetically.
// For instance: xybbbefaaag
// Would return a, as a and b both occur 3 times each, respectively, but a comes before b alphabetically.
// input -> function("abcddefg")
// output -> d
// input -> function("heggbdeff")
// output -> f

function findCommonMeWithPriority(inputstr) {
  let myob = {};

  let charr = inputstr.split("");

  charr.sort();

  for (let k = 0; k < charr.length; k++) {
    if (myob[charr[k]] != undefined) {
      myob[charr[k]] = myob[charr[k]] + 1;
    } else {
      myob[charr[k]] = 1;
    }
  }

  return Object.entries(myob)[0];
}

console.log(findCommonMeWithPriority("xybbbefaaag"));

// 4. Find the repeating characters. Return an array containing all repeating characters that occur in the provided string. Your function should accept a second parameter that defines how many times the target character should repeat before it is returned.
// input -> function("abcddef", 2)
// output -> [d]
// input -> function("tfghhhplffzaaa", 3)
// output -> [h, a]

function findRepeatingCharsWithDefineTimes(inputstr, times) {
  let myob = {};

  let charr = inputstr.split("");

  charr.sort();

  for (let k = 0; k < charr.length; k++) {
    if (myob[charr[k]] != undefined) {
      myob[charr[k]] = myob[charr[k]] + 1;
    } else {
      myob[charr[k]] = 1;
    }
  }

  let arr1 = Object.entries(myob);

  let a1 = [];

  for (let j = 0; j < arr1.length; j++) {
    let [x, y] = arr1[j];
    if (y === times) {
      a1.push(x);
    }
  }

  return a1;
}

console.log(findRepeatingCharsWithDefineTimes("tfghhhplffzaaa", 3));

// 5. Is the nth letter a vowel or a consonant? Determine whether the letter at the supplied index in the provided string is either a vowel or a consonant.
// input -> function("hello", 4)
// output -> consonant
// input -> function("cat", 2)
// output -> vowel

function findIndexedCharIsVovelOrCosonant(inputstr, place) {
  if (place > inputstr.length) {
    return "No Char at that place";
  } else {
    inputstr = inputstr.toLowerCase();
    let vovel = ["a", "e", "i", "o", "u"];
    return vovel.includes(inputstr[place]) ? "vovel" : "consonant";
  }
}

console.log(findIndexedCharIsVovelOrCosonant("hello", 4));
console.log(findIndexedCharIsVovelOrCosonant("cat", 2));

// 6. Sort the string alphabetically. Return the supplied string in alphabetical order. Your function must be able to sort the string in either direction; so either ascending or descending alphabetical order.
// input -> function("bacd", false)
// output -> abcd
// input -> function("axedzpq", true)
// output -> zxqpeda

function sortMeByDirection(inputstr, direction) {
  let finalStr = "";

  if (!direction) {
    finalStr = inputstr.split("").sort().join("");
  } else {
    let arr = inputstr.split("").sort();
    let a = "";
    for (let k = arr.length - 1; k >= 0; k--) {
      a += arr[k];
    }

    finalStr = a;
  }

  return finalStr;
}

console.log(sortMeByDirection("bacd", false));
console.log(sortMeByDirection("axedzpq", true));

// 7.Is the string in alphabetic order? Similarly, what’s the most efficient way to check if a string is in alphabetic order? Your function must be able to verify reverse-alphabetic order, also.
// input -> function("abbcddeikl", false)
// output -> true
// input -> function("jheca", true)
// output -> true

function checkOrder(inputstr, direction) {
  inputstr = inputstr.toLowerCase();
  let res = true;
  if (!direction) {
    //ascending
    console.log("Ca1");
    for (let k = 0; k < inputstr.length - 1; k++) {
      let currcount = inputstr[k].charCodeAt(0);
      let nextCount = inputstr[k + 1].charCodeAt(0);

      if (currcount > nextCount) {
        res = false;
        break;
      }
    }
  } else {
    //descending
    for (let k = 0; k < inputstr.length - 1; k++) {
      let currcount = inputstr[k].charCodeAt(0);
      let nextCount = inputstr[k + 1].charCodeAt(0);

      if (currcount < nextCount) {
        res = false;
        break;
      }
    }
  }

  return res;
}

console.log(checkOrder("abbcddeikl", false));
console.log(checkOrder("jheca", true));

// 8. Capitalize the first letter of each word. Write a function to capitalize the first letter of each word in the provided string.
// input -> function("i am a string")
// output -> I Am A String

function capitalizeMeAtEveryWord(input) {
  return input
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
}

console.log(capitalizeMeAtEveryWord("i am a string"));

// 9. Search for a string within a string. Does the target string contain the provided string? No use of indexOf() or similar functions is allowed.
// input -> function("catapult", "cat")
// output -> true

function amIinTheString(inputstr, findingStr) {
  for (let j = 0; j < inputstr.length - findingStr.length; j++) {
    let part = inputstr.substring(j, j + findingStr.length);
    if (part === findingStr) {
      return true;
    }
  }
  return false;
}

console.log(amIinTheString("cbtapultc atc", "cat"));

// 10. Shuffle the string. Write a function to completely randomize a given string. The string should be scrambled entirely, in a random a manner as possible.
// input -> function("hello")
// output-> lelho

function scrambledMe(inputstr) {
  let stack1 = inputstr.split("").sort();

  let filler = [];
  for (let k = 0; k < stack1.length; k++) {
    filler.push("");
  }

  while (stack1.length != 0) {
    let randomIndex = Math.floor(Math.random() * filler.length);
    if (filler[randomIndex] === "") {
      let popedEl = stack1.pop();
      filler[randomIndex] = popedEl;
    }
  }

  return `${inputstr}  to=>  ${filler.join("")}`;
}

console.log(scrambledMe("hello"));

// 11. Alternating caps. Return the supplied string, but every other letter should be capitalized.
// input -> function("I am a string"))
// output-> I aM a StRiNg

function capitalizeMeAtEveryOtherChar(input) {
  return input
    .split("")
    .map((el, index) => (index % 2 === 0 ? el[0].toUpperCase() : el))
    .join("");
}

console.log(capitalizeMeAtEveryOtherChar("i am a string"));

// 12. Quote extractor. Given a quote in a format like this:
// “[QUOTE]” – [author]
// Return an array containing both the quote text and the author. Both components (quote, author) could also contain hyphens (-).
// example->
// const quote = `"The unexamined life is not worth living." - Socrates`
// input -> function(quote)
// output -> ["The unexamined life is not worth living.", "Socrates"]

function stylishQuote(InputQuoteWithauthor) {
  let arr = InputQuoteWithauthor.split("");
  let count = 0;
  let str = "";
  let index = 0;
  for (let k = 0; k < arr.length; k++) {
    if (count < 3) {
      if (arr[k] === `"`) {
        count += 1;
      }
      str += arr[k];
    }
    if (count == 2) {
      index = k;
      break;
    }
  }

  return [str, InputQuoteWithauthor.substring(index + 4)];
}

console.log(
  stylishQuote(`"The unexamined life is not worth living." - Socrates`)
);

// 13. Verify the email address. In this JavaScript exercise, write a function to determine whether an email address is valid or not.
// input -> function("somebody@somewhere"))
// output -> false
// input -> function("person@company.com"))
// output -> true

function isEmailValid(inputEmail) {
  console.log(inputEmail);

  let emailPattern = /^[A-Za-z0-9]+@{1}[a-zA-Z0-9]+\.[A-Za-z]/g;

  console.log(emailPattern.test(inputEmail));
}

console.log(isEmailValid("somebody@somewhere"));
console.log(isEmailValid("person@company.com"));
console.log(isEmailValid("20ceuod026@ddu.sce.in"));
console.log(isEmailValid("paliwarvivek@gmail.com"));
