/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let len = Math.ceil(arr.length / size)
    for (let i = 0; i < len; i++) {
        newArr[i] = arr.splice(0, size);
    }
    return newArr;
}

// Test cases

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
let testCaseOne = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(testCaseOne);

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
let testCaseTwo = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
console.log(testCaseTwo);

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
let testCaseThree = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
console.log(testCaseThree);