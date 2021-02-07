/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    if (arr[0] > arr[1]) {arr = arr.reverse()}
    let rangeArr = []
    for (let i = arr[0]; i <= arr[1]; i++) {rangeArr.push(i)}
    return rangeArr.reduce((total, val) => total + val)}

// Test cases

// sumAll([4, 1]) should return 10.
let testCaseOne = sumAll([4, 1]);
console.log(testCaseOne);

// sumAll([10, 5]) should return 45.
let testCaseTwo = sumAll([10, 5]);
console.log(testCaseTwo);