const {
  namearray,
  objarr,
  getnamesWithRandomAge,
  numarr,
  createRandomNumberArray,
} = require("./utils");

let newVal;

// 1) Turn an array of numbers into a total of all the numbers

const getTotalOfNumbers = (numbers) => {
  console.log("Provided Numbers : ", numbers);

  return `Total : ${numbers.reduce((incremental, currval) => {
    incremental = incremental + currval;
    return incremental;
  }, 0)} `;
};

console.log(getTotalOfNumbers(createRandomNumberArray(15)));

// 2) Turn an array of numbers into a long string of all those numbers.

const getStringFromNumbers = (numbers) => {
  console.log("Provided Numbers : ", numbers);

  return `Entire String : ${numbers.reduce(
    (incremental, currval) => incremental + currval,
    ""
  )} `;
};

console.log(getStringFromNumbers(createRandomNumberArray(50)));

// 3) Turn an array of voter objects into a count of how many people voted and how many people voted for which people

// Bonus get array of people who are voting for each other

const getPeopleWithVoteToEachOther = (voters) => {
  let nameslen = namearray.length;

  console.log(voters);

  return voters.map((v) => {
    return {
      ...v,
      votedFor: namearray[Math.floor(Math.random() * nameslen)],
    };
  });
};

const calculateResult = (voters) => {
  return voters.reduce((res, currval) => {
    if (!res[currval.votedFor]) {
      res[currval.votedFor] = 1;
    } else {
      res[currval.votedFor]++;
    }
    return res;
  }, {});
};

console.log(
  calculateResult(getPeopleWithVoteToEachOther(getnamesWithRandomAge()))
);

// 4) Given an array of arrays, flatten them into a single array

let multidarrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flattenTheArray = (multidarrays) => {
  return multidarrays.reduce((finalarr, curr) => {
    finalarr.push(...curr);
    return finalarr;
  }, []);
};

console.log(flattenTheArray(multidarrays));
