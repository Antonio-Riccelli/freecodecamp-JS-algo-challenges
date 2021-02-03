/*
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice()
    newArr.splice(n, 0, ...arr1)
    return newArr 
    }

// Test cases

// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
let testCaseOne = frankenSplice([1, 2, 3], [4, 5], 1)
console.log(testCaseOne)

// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
let testCaseTwo = frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
console.log(testCaseTwo)