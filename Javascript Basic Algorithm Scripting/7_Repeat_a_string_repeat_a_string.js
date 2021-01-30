/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    } else {
        let string = "";
        for (let i = num; i > 0; i--) {
            string = string.concat(str)
        }
        return string;
    }
}

// Test cases

// repeatStringNumTimes("*", 3) should return "***".
let testCaseOne = repeatStringNumTimes("*", 3);
console.log(testCaseOne);

// repeatStringNumTimes("abc", -2) should return "".
let testCaseTwo = repeatStringNumTimes("abc", -2);
console.log(testCaseTwo);

// repeatStringNumTimes("abc", 0) should return "".
let testCaseThree = repeatStringNumTimes("abc", 0);
console.log(testCaseThree);