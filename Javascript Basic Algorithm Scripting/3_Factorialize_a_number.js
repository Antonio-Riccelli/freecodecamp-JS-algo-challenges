/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result
}

// Test cases

// factorialize(5) should return 120.
let testCaseOne = factorialize(5);
console.log(testCaseOne);

// factorialize(10) should return 3628800.
let testCaseTwo = factorialize(10);
console.log(testCaseTwo);

// factorialize(20) should return 2432902008176640000.
let testCaseThree = factorialize(20);
console.log(testCaseThree);

// factorialize(0) should return 1.
let testCaseFour = factorialize(0)
console.log(testCaseFour);