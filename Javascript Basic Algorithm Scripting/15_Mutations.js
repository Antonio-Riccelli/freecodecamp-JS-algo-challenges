/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
    let wordTwo = arr[1].toLowerCase().split("")
    return wordTwo.every(function (e) {
        if (arr[0].toLowerCase().indexOf(e) == -1) {
            return false
        } else {
            return true
        }
    })
}

// Test cases

// mutation(["hello", "hey"]) should return false.
let testCaseOne = mutation(["hello", "hey"]);
console.log(testCaseOne);

// mutation(["hello", "Hello"]) should return true.
let testCaseTwo = mutation(["hello", "Hello"]);
console.log(testCaseTwo);

// mutation(["Alien", "line"]) should return true.
let testCaseThree = mutation(["Alien", "line"]);
console.log(testCaseThree);

// mutation(["Tiger", "Zebra"]) should return false.
let testCaseFour = mutation(["Tiger", "Zebra"]);
console.log(testCaseFour);