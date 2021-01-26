/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32
    return fahrenheit;
  }
  

// Test Cases
  
// convertToF(30) should return a value of 86
let testCaseOne = convertToF(30);
console.log("Result of testCaseOne is: " + testCaseOne);

// convertToF(-30) should return a value of -22
let testCaseTwo = convertToF(-30)
console.log("Result of testCaseTwo is: " + testCaseTwo)