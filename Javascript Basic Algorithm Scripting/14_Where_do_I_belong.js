/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b
    })
    let index = arr.findIndex(function (e, ind) {
        return e >= num
    })
    if (index === -1) {
        if (num > arr.length) {
            index = arr.length
        } else {
            index = 0
        }
    }
    return index
}

// Test cases

// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
let testCaseOne = getIndexToIns([10, 20, 30, 40, 50], 35)
console.log(testCaseOne)

// getIndexToIns([3, 10, 5], 3) should return 0.
let testCaseTwo = getIndexToIns([3, 10, 5], 3)
console.log(testCaseTwo)

// getIndexToIns([2, 5, 10], 15) should return 3.
let testCaseThree = getIndexToIns([2, 5, 10], 15);
console.log(testCaseThree)

// getIndexToIns([], 1) should return 0.
let testCaseFour = getIndexToIns([], 1)
console.log(testCaseFour)