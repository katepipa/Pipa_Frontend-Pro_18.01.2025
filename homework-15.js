function pow (number, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree === 1) {
    return number;
  } else {
    return number * pow(number, degree - 1);
  }
}

let inputNumber = Number(prompt('Enter number'));
let inputDegree = Number(prompt('Enter degree'));
let res;

if (isNaN(inputNumber) || isNaN(inputDegree)) {
  console.log('Please enter numbers');
} else {
  res = pow(inputNumber, inputDegree);
  
  console.log(`${inputNumber} ^ ${inputDegree} = ${res}`);
}