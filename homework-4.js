// 1 script - Comparison of two numbers
let num1 = 900;
let num2 = 1000;
if (num1 > num2) {
  console.log('Number ', num1, ' is more than ', num2);
  console.log('Number ', num2, ' is less than ', num1);
} else {
  console.log('Number ', num2, ' is more than ', num1);
  console.log('Number ', num1, ' is less than ', num2);
} 

// 2 script - Distance comparison 
let distanceInKm = 9;
let distanceInFeet = 40785;
let feetInKm = distanceInFeet * 0.000305;
if (distanceInKm < feetInKm) {
  console.log(`The distance in Km ${distanceInKm} is less than distance in Feet - ${distanceInFeet} (equals ${feetInKm.toFixed(3)} Km)`);
} else {
  console.log(`The distance in Feet ${distanceInFeet} (equals ${feetInKm.toFixed(3)} Km) is less than distance in Km - ${distanceInKm}`);
}

// 3 script - Definition of the dividend (ділене) and the divisor (дільник)
let a = 38;
let b = 2;
if (b % a === 0) {
  console.log(`Number ${a} is the divisor of number ${b}`);
} else {
  console.log(`Number ${a} is NOT the divisor of number ${b}`);
}

if (a % b === 0) {
  console.log(`Number ${b} is the divisor of number ${a}`);
} else {
  console.log(`Number ${b} is NOT the divisor of number ${a}`);
}

// 4 script - Value of the end digit of the number (even digit or odd digit)
let number = 16457;
let lastDigit = number % 10;
if (lastDigit % 2 === 0) {
  console.log(`The last digit of the number ${number} is even and equals ${lastDigit}`);
} else {
  console.log(`The last digit of the number ${number} is odd and equals ${lastDigit}`);
}

// 5 script - Comparing digits of a two-digit number
let twoDigitNum = 84;
let firstDigit = twoDigitNum / 10 | 0;
let secondDigit = twoDigitNum % 10;
if (firstDigit > secondDigit) {
  console.log(`In the number ${twoDigitNum} the first digit - ${firstDigit} is greater than the second one - ${secondDigit}`);
} else if (firstDigit === secondDigit) {
  console.log(`In the number ${twoDigitNum} the first digit - ${firstDigit} is equal to the second one - ${secondDigit}`);
} else {
  console.log(`In the number ${twoDigitNum} the second digit - ${secondDigit} is greater than the first one - ${firstDigit}`);
}

// 6 script - Arithmetic operations with a three-digit number 
let threeDigitNum = 363;
let digit1 = threeDigitNum / 100 | 0;
let digit2 = (threeDigitNum % 100) / 10 | 0;
let digit3 = threeDigitNum % 10;
let sumOfDigits = digit1 + digit2 + digit3;
let productOfNumbers = digit1 * digit2 * digit3;
if (sumOfDigits % 2 === 0) {
  console.log(`The sum of the digits of a number ${threeDigitNum} is even and equals - ${sumOfDigits}`);
} else {
  console.log(`The sum of the digits of a number ${threeDigitNum} is odd and equals - ${sumOfDigits}`);
}

if (sumOfDigits % 5 === 0) {
  console.log(`The sum of the digits of a number ${threeDigitNum} is multiple of five`);
} else {
  console.log(`The sum of the digits of a number ${threeDigitNum} is NOT multiple of five`);
}

if (productOfNumbers > 100) {
  console.log(`The product of the digits of a number ${threeDigitNum} = ${productOfNumbers} is greater than 100`);
} else if (productOfNumbers < 100) {
  console.log(`The product of the digits of a number ${threeDigitNum} = ${productOfNumbers} is less than 100`);
} else {
  console.log(`The product of the digits of a number ${threeDigitNum} = ${productOfNumbers} equals 100`);
}

// Comparing digits of a number
if (digit1 === digit2 && digit2 === digit3) {
  console.log(`True! All the digits in the number ${threeDigitNum} are the same`);
} else {
  console.log(`False! Not all the digits in the number ${threeDigitNum} are the same`);
}

// Are there any digits that are the same?
if (digit1 === digit2 && digit2 === digit3) {
  console.log(`Yes! All digits in the number ${threeDigitNum} are identical!`);
} else if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
  console.log(`Yes! There are two identical digits in the number ${threeDigitNum}`);
  if (digit1 === digit2) {
    console.log(`Namely the first digit - ${digit1} and the second one - ${digit2}`);
  } else if (digit2 === digit3) {
    console.log(`Namely the second digit - ${digit2} and the third one - ${digit3}`);
  } else if (digit3 === digit1) {
    console.log(`Namely the first digit - ${digit1} and the third one - ${digit3}`);
  }
} else {
  console.log(`No! There are no identical digits in the number ${threeDigitNum}`);
}

// 7 script - Is a six-digit number mirrored?
let sixDigitNum = 163361;
let d1 = sixDigitNum / 100000 | 0;
let d2 = (sixDigitNum % 100000) / 10000 | 0;
let d3 = (sixDigitNum % 10000) / 1000 | 0;
let d4 = (sixDigitNum % 1000) / 100 | 0;
let d5 = (sixDigitNum % 100) / 10 | 0;
let d6 = sixDigitNum % 10;
if (d1 === d6 && d2 === d5 && d3 === d4) {
  console.log(`Yes! The number ${sixDigitNum} is a mirror number!`);
} else {
  console.log(`No! The number ${sixDigitNum} is NOT a mirror number!`);
}