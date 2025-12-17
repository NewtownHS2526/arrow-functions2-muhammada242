// Activity 4: Functions with Complex Logic to Arrow Functions// Convert each function below to an arrow function
// Problem 1function isAdult(age) {    if (age >= 18) {        return true;    }    return false;}// Convert to arrow function:const isAdult = (age) => age >= 18;

// Problem 2function getGrade(score) {    if (score >= 90) {        return "A";    } else if (score >= 80) {        return "B";    } else if (score >= 70) {        return "C";    } else {        return "F";    }}// Convert to arrow function:const getGrade = (score) => score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// Problem 3function calculateTotal(items) {    let total = 0;    for (let i = 0; i < items.length; i++) {        total += items[i];    }    return total;}// Convert to arrow function:const calculateTotal = (items) => items.reduce((sum, item) => sum + item, 0);

// Problem 4function filterEvenNumbers(numbers) {    return numbers.filter(function(num) {        return num % 2 === 0;    });}// Convert to arrow function (convert both outer and inner functions):const filterEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);

// Problem 5function mapToSquares(arr) {    return arr.map(function(x) {        return x * x;    });}// Convert to arrow function (convert both outer and inner functions):const mapToSquares = (arr) => arr.map((x) => x * x);

// Problem 6function findLongestWord(words) {    let longest = "";    words.forEach(function(word) {        if (word.length > longest.length) {            longest = word;        }    });    return longest;}// Convert to arrow function (convert both outer and inner functions):const findLongestWord = (words) => { let longest = ""; words.forEach((word) => { if (word.length > longest.length) { longest = word; } }); return longest; };

// Problem 7function sumArray(numbers) {    return numbers.reduce(function(acc, num) {        return acc + num;    }, 0);}// Convert to arrow function (convert both outer and inner functions):const sumArray = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

// Problem 8function getInitials(firstName, lastName) {    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();}// Convert to arrow function:const getInitials = (firstName, lastName) => firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

// Problem 9function checkPassword(password) {    if (password.length >= 8) {        return true;    }    return false;}// Convert to arrow function:const checkPassword = (password) => password.length >= 8;

// Problem 10function formatName(first, middle, last) {    if (middle) {        return first + " " + middle + " " + last;    }    return first + " " + last;}// Convert to arrow function:const formatName = (first, middle, last) => middle ? first + " " + middle + " " + last : first + " " + last;