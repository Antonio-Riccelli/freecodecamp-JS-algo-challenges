/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
    let wordArray = str.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].length;
    }
    return wordArray.sort(function (a, b) {
        return a - b
    })[wordArray.length - 1];
}

// Test cases

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
let testCaseOne = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(testCaseOne);

// findLongestWordLength("May the force be with you") should return 5.
let testCaseTwo = findLongestWordLength("May the force be with you");
console.log(testCaseTwo);

// findLongestWordLength("Google do a barrel roll") should return 6.
let testCaseThree = findLongestWordLength("Google do a barrel roll");
console.log(testCaseThree);

// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
let testCaseFour = findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
console.log(testCaseFour);

// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
let testCaseFive = findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
console.log(testCaseFive);