// 1 script - Asking for user's name
let username = prompt('What is your name?');
alert('Hello, ' + username + '! How are you?');

// 2 script - Arithmetic operations
let num1 = Number(prompt(username + ', enter first number for calculating arithmetic operations'));
let num2 = Number(prompt('Enter second number'));
let resOfSum = num1 + num2;
let resOfSubtraction = num1 - num2;
let resOfMultiplication = num1 * num2;
let resOfDivision = num1 / num2;
alert(username + ', you entered number ' + num1 + ' and number ' + num2 + '!\nHere are the results of the calculations:\nThe sum is ' + resOfSum + '\nThe subtraction is ' + resOfSubtraction + '\nThe multiplication is ' + resOfMultiplication + '\nThe division is ' + resOfDivision);

// 3 script - Comparison of values
let value1 = prompt(username + ', enter the first value for comparison of values');
let value2 = prompt('Enter the second value please');
resOfEquality = value1 === value2;
alert('Result of equality of values is ' + resOfEquality);

// 4 script - Determining the arithmetic mean
let a = Number(prompt(username + ', enter the first number for determining the arithmetic mean'));
let b = Number(prompt('Enter the second number'));
let c = Number(prompt('Enter the third number'));
sumOfNumbers = a + b + c;
amountOfNumbers = 3;
arithmAverage = sumOfNumbers / amountOfNumbers;
alert(username + ', the arithmetic mean of ' + a + ', ' + b + ', ' + c + ' is:\n' + arithmAverage); 

// 5 script - Decomposition of a five-digit number by digits
let fiveDigitNum = Number(prompt(username + ', enter a five-digit number please'));
let firstDigit = fiveDigitNum / 10000 | 0;
let secondDigit = (fiveDigitNum % 10000) / 1000 | 0;
let thirdDigit = (fiveDigitNum % 1000) / 100 | 0;
let fourthDigit = (fiveDigitNum % 100) / 10 | 0;
let fifthDigit = fiveDigitNum % 10;
alert(username + ', here is the division of the number ' + fiveDigitNum + ' by space:\n' + firstDigit + ' ' + secondDigit + ' ' + thirdDigit + ' ' + fourthDigit + ' ' + fifthDigit);


