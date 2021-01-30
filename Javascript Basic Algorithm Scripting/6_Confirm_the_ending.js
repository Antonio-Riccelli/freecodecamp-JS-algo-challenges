/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead
*/

function confirmEnding(str, target) {
    return str.slice(-target.length) === target;
}

// Test cases

// confirmEnding("Bastian", "n") should return true.
let testCaseOne = confirmEnding("Bastian", "n");
console.log(testCaseOne);

// confirmEnding("Congratulation", "on") should return true.
let testCaseTwo = confirmEnding("Congratulation", "on");
console.log(testCaseTwo);

// confirmEnding("Connor", "n") should return false.
let testCaseThree = confirmEnding("Connor", "n");
console.log(testCaseThree);

// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
let testCaseFour = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
console.log(testCaseFour);

// confirmEnding("He has to give me a new name", "name") should return true.
let testCaseFive = confirmEnding("He has to give me a new name", "name");
console.log(testCaseFive);

// 