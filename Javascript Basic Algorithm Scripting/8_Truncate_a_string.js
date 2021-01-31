/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a "..." ending.
*/

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

// Test cases

// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
let testCaseOne = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(testCaseOne);

// truncateString("Peter Piper picked a peck of pickled peppers", 11).
let testCaseTwo = truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(testCaseTwo);

// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
let testCaseThree = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
console.log(testCaseThree);

// truncateString("A-", 1) should return "A...".
let testCaseFour = truncateString("A-", 1);
console.log(testCaseFour);