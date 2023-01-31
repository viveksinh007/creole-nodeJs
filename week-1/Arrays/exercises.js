// Get name initials
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

const { getnamesWithRandomAge } = require("./utils");

const getInitials = (input) => {
  let initials = "";

  return input
    .split(" ")
    .map((word) => word[0])
    .join("");
};

console.log(getInitials("George Raymond Richard Martin"));

// Age difference from the youngest and oldest
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

const ageDifference = (family) => {
  let membersAgeList = family.map((members) => members.age);

  youngest = Math.min(...membersAgeList);
  oldest = Math.max(...membersAgeList);

  return [youngest, oldest, oldest - youngest];
};

console.log(ageDifference(getnamesWithRandomAge()));

// Numeronyms
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

const GetNumeronymsString = (inputString) => {
  console.log(inputString);

  let words = inputString.split(" ");

  return (finalString = words.reduce((st, word) => {
    if (word.length <= 3) {
      return st + " " + word;
    } else {
      let seg =
        " " +
        word[0] +
        word.slice(1, word.length - 1).length +
        word[word.length - 1];

      return st + seg;
    }
  }, ""));

  //   console.log(finalString);
};

console.log(
  "Numeronyms :",
  GetNumeronymsString("Every developer likes to mix kubernetes and javascript")
);

// Count elements in array of arrays

const countElemFrequency = (inputarr) => {
  return inputarr.flat().reduce((store, elem) => {
    if (!store[elem]) {
      store[elem] = 1;
    } else {
      store[elem]++;
    }
    return store;
  }, {});
};

const inputarr = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

console.log("count elements : ", countElemFrequency(inputarr));
