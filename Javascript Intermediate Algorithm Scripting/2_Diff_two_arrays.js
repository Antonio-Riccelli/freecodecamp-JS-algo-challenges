/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note:
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    let newArr = [];
    arr1.forEach(function(e) {
      if (arr2.indexOf(e) == -1) {
        newArr.push(e)
      }
    })
    arr2.forEach(function(e) {
      if (arr1.indexOf(e) == -1) {
        newArr.push(e)
      }
    })
    return newArr;
  }

// Test cases

// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"].
let testCaseOne = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
console.log(testCaseOne)

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4].
let testCaseTwo = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
console.log(testCaseTwo) 