/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/


function titleCase(str) {
  return str.split(" ").map(function(e) {return `${e[0].toUpperCase()}${e.slice(1).toLowerCase()}`}).join(" ")
}

// Test cases

// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
let testCaseOne = titleCase("I'm a little tea pot");
console.log(testCaseOne);

// titleCase("sHoRt AnD sToUt") should return Short And Stout.
let testCaseTwo = titleCase("sHoRt AnD sToUt");
console.log(testCaseTwo);

// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
let testCaseThree = titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
console.log(testCaseThree);