// // Exercise 1
let arr = [];
let lengthOfArray = Number(prompt(`Enter the length of array`));

for (let i = 0; i < lengthOfArray; i++) {
  let elementOfArray = Number(prompt(`Enter element ${i + 1}`));
  arr.push(elementOfArray);
}

alert(`You have got the following array:\n ${arr.join(' ')}`);

arr.sort((a, b) => a - b);
alert(`Sorted array in ascending order:\n ${arr.join(' ')}`);

arr.splice(1, 3);
alert(`New array with deleted elements from 2 to 4:\n ${arr.join(' ')}`);

// Exercise 2
let arrOfNumbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let count = 0;
let countOfNegativeElements = 0;
let countOfOddPositiveElements = 0;
let countOfEvenPositiveElements = 0;

let sum = 0;
let sumOfEvenPositiveElements = 0;
let sumOfOddPositiveElements = 0;

let productOfPositiveElements = 1;

for (let value of arrOfNumbers) {
  if (value > 0) {
    sum += value;
    productOfPositiveElements *= value;
    count++
  }
  if (value < 0) {
    countOfNegativeElements++;
  }
  if (value > 0 && value % 2 !== 0) {
    sumOfOddPositiveElements += value;
    countOfOddPositiveElements++;
  }
  if (value > 0 && value % 2 === 0) {
    sumOfEvenPositiveElements += value;
    countOfEvenPositiveElements++;
  }
}

console.log(`Sum of positive elements = ${sum} and count = ${count}`);
console.log(`There are ${countOfNegativeElements} negative elements in the array`);
console.log(`There are ${countOfOddPositiveElements} odd positive elements in the array`);
console.log(`There are ${countOfEvenPositiveElements} even positive elements in the array`);
console.log(`Sum of even positive elements = ${sumOfEvenPositiveElements}`);
console.log(`Sum of odd positive elements = ${sumOfOddPositiveElements}`);
console.log(`Product of positive elements is equal ${productOfPositiveElements}`);

//Defining max and min element and new array with max value and 0 values
let minNumber = arrOfNumbers.reduce((minNumber, element) => (element < minNumber ? element : minNumber), arrOfNumbers[0]);
console.log(`Min number in the array is ${minNumber} under index ${arrOfNumbers.indexOf(minNumber)}`);

let maxNumber = arrOfNumbers.reduce((maxNumber, element) => (element > maxNumber ? element : maxNumber), arrOfNumbers[0]);
console.log(`Max number in the array is ${maxNumber} under index ${arrOfNumbers.indexOf(maxNumber)}`);

let newNullArrayAndMaxVal = arrOfNumbers.map(element => (element === maxNumber ? element : 0));
console.log(`New array with max value and 0 values:\n ${newNullArrayAndMaxVal.join(' ')}`);

// function
let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

function findDifferentElementsInArray (array) {
  let count = 0;
  let countOfNegativeElements = 0;
  let countOfOddPositiveElements = 0;
  let countOfEvenPositiveElements = 0;

  let sum = 0;
  let sumOfEvenPositiveElements = 0;
  let sumOfOddPositiveElements = 0;

  let productOfPositiveElements = 1;

  for (let value of array) {
    if (value > 0) {
      sum += value;
      productOfPositiveElements *= value;
      count++
    }
    if (value < 0) {
      countOfNegativeElements++;
    }
    if (value > 0 && value % 2 !== 0) {
      sumOfOddPositiveElements += value;
      countOfOddPositiveElements++;
    }
    if (value > 0 && value % 2 === 0) {
      sumOfEvenPositiveElements += value;
      countOfEvenPositiveElements++;
    }
  }

  let res = {
    sum: sum,
    count: count,
    countOfNegativeElements: countOfNegativeElements,
    countOfOddPositiveElements: countOfOddPositiveElements,
    countOfEvenPositiveElements: countOfEvenPositiveElements,
    sumOfEvenPositiveElements: sumOfEvenPositiveElements,
    sumOfOddPositiveElements: sumOfOddPositiveElements,
    productOfPositiveElements: productOfPositiveElements
  };

  return res;
}

const result = findDifferentElementsInArray(array);
console.log(result);