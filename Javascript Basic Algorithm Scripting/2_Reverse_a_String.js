/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
    let reverseString = str.split("").reverse().join("");
    return reverseString;
  }
  

// Test cases

// reverseString("hello") should become "olleh".
let testCaseOne = reverseString("hello");
console.log(testCaseOne);

// reverseString("Howdy") should become "ydwoH".
let testCaseTwo = reverseString("Howdy");
console.log(testCaseTwo);

// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".
let testCaseThree = reverseString("Greetings from Earth");
console.log(testCaseThree);