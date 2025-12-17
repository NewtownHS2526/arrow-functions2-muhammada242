// Activity 3: Functions with Multiple Parameters to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
function add(a, b) {
    return a + b;
}
// Convert to arrow function:
const add = (a, b) => a + b;


// Problem 2
function multiply(x, y) {
    return x * y;
}
// Convert to arrow function:
const multiply = (x, y) => x * y;


// Problem 3
function subtract(num1, num2) {
    return num1 - num2;
}
// Convert to arrow function:
const subtract = (num1, num2) => num1 - num2;


// Problem 4
function divide(dividend, divisor) {
    return dividend / divisor;
}
// Convert to arrow function:
const divide = (dividend, divisor) => dividend / divisor;


// Problem 5
function greet(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName;
}
// Convert to arrow function:
const greet = (firstName, lastName) => "Hello, " + firstName + " " + lastName;


// Problem 6
function findMax(a, b) {
    return a > b ? a : b;
}
// Convert to arrow function:
const findMax = (a, b) => a > b ? a : b;


// Problem 7
function findMin(x, y) {
    if (x < y) {
        return x;
    }
    return y;
}
// Convert to arrow function:
const findMin = (x, y) => x < y ? x : y;


// Problem 8
function concatenate(str1, str2) {
    return str1 + str2;
}
// Convert to arrow function:
const concatenate = (str1, str2) => str1 + str2;


// Problem 9
function power(base, exponent) {
    return Math.pow(base, exponent);
}
// Convert to arrow function:
const power = (base, exponent) => Math.pow(base, exponent);


// Problem 10
function calculateArea(length, width) {
    return length * width;
}
// Convert to arrow function:
const calculateArea = (length, width) => length * width;
