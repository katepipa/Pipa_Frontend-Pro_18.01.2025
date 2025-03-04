// Exercise 1
function getParameter (number) {
  let sumOfParameters = number;

  return function (newNumber) {
    return sumOfParameters += newNumber;
  }
}

let getSum = getParameter(10);

console.log(`Exercise 1: \n`);
console.log(getSum(10));
console.log(getSum(20));
console.log(getSum(30));

//Exercise 2
let arr = [5, 'hello', 45, {id: 1, name: 'Kateryna'}, true, 20, 'world', 9, 30, '!'];
let arithmeticMean = getArithmeticMean(arr);

console.log(`Exercise 2: \n`);
console.log(arithmeticMean);

function getArithmeticMean (arr) {
  let sum = 0; 
  let count = 0;

  for (value of arr) {
    if (typeof value === 'number') {
      sum += value;
      count++;
    }
  }

  let average = sum / count;

  return average;
}

//Exercise 3
function doMath(x, znak, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    switch (znak) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return x / y;
      case '%':
        return x % y;
      case '^':
        return Math.pow(x, y);
      default:
        return 'You entered a non-existent mathematical symbol';
    }
  } else {
    console.log('x and y are not numbers');
  } 
}

console.log('Exercise 3:');

let inputX = Number(prompt(`Enter x`));
let inputZnak = prompt(`Enter mathematical operation`);
let inputY =  Number(prompt(`Enter y`));
let resOfOperation = doMath(inputX, inputZnak, inputY);

console.log(`${inputX} ${inputZnak} ${inputY} = ${resOfOperation}`);

//Exercise 4
function fillTwoDimensionalArr (lengthArr, lengthSubArr) {
  const twoDimensionalArr = [];

  for (let i = 0; i < lengthArr; i++) {
    twoDimensionalArr[i] = [];
  }

  for (let i = 0; i < lengthArr; i++) {
    for (let j = 0; j < lengthSubArr; j++) {
      twoDimensionalArr[i][j] = Number(prompt(`Enter element for index [${i}][${j}]`)); 
    }
  }

  return twoDimensionalArr;
}

let inputlengthArr = Number(prompt(`Enter length of main array`));
let inputlengthSubArr = Number(prompt(`Enter length of subarray`));
let resArray = fillTwoDimensionalArr(inputlengthArr, inputlengthSubArr);

console.log('Exercise 4:');
console.log(resArray);

//Exersice 5
function removeCharactersFromString (str, arrOfDeletedItems) {
  let strArray = str.split('');
  
  let finalStr = strArray.filter(function(value) {
    return !arrOfDeletedItems.includes(value);
  });

  return finalStr.join('');
}

let inputStr = prompt('Enter your string');
let inputSymbToDelete = prompt('Enter symbols to delete without spaces').split('');

console.log(`Exercise 5:`);
console.log(removeCharactersFromString(inputStr, inputSymbToDelete));