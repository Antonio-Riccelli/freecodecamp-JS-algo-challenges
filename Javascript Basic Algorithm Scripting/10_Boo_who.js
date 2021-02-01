/*
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/

function booWho(bool) {
    return typeof (bool) === "boolean";
}

// Test cases

// booWho(true) should return true.
let testCaseOne = booWho(true);
console.log(testCaseOne);

// booWho([1, 2, 3]) should return false.
let testCaseTwo = booWho([1, 2, 3]);
console.log(testCaseTwo);

// booWho(NaN) should return false.
let testCaseThree = booWho(NaN);
console.log(testCaseThree);

// booWho("true") should return false.
let testCaseFour = booWho("true");
console.log(testCaseFour);