let now = new Date();
console.log(now); // current date

console.log(new Date() / 1000); // milliseconds from 1st Jan 1970

// For Getting the basic information from Date

console.log("getFullYear : ", now.getFullYear()); // gives full year.
console.log("getMonth : ", now.getMonth()); // gives number of month starting from 0.
console.log("getDate : ", now.getDate()); // gives date.
console.log("getDay : ", now.getDay()); //  gives day with Sunday as 0 and so on.
console.log("getHours : ", now.getHours()); // gives hours in 24 hour format.
console.log("getMinutes : ", now.getMinutes()); //  gives minutes
console.log("getSeconds : ", now.getSeconds()); // gives seconds
console.log("getTime : ", now.getTime()); // gives time passed from 1 Jan 1970 till now in milliseconds

let present = new Date("Aug 31 2020");
let past = new Date("Aug 31 2020");
console.log(present, past);
let days = present - past;
console.log(days); //  time stamp
console.log(Math.abs(new Date(days) / (1000 * 60 * 60 * 24)));

// For Updating the information like day , hour , ms in Date
