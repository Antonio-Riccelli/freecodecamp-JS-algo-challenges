/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
    let a = arguments[0];
    let b = [...arguments].slice(1);
    return a.filter((e) => b.indexOf(e) == -1);
  }

// Test cases

// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
let testCaseOne = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
console.log(testCaseOne);

// destroyer([2, 3, 2, 3], 2, 3) should return [].
let testCaseTwo = destroyer([2, 3, 2, 3], 2, 3);
console.log(testCaseTwo);