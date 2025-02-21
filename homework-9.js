//Exercise 1
let str = '';

for (let i = 20; i <= 30; i += 0.5) {
  str += i + (i < 30 ? ' ' : '');
}

console.log(str);

//Exercise 2
const UAHInOneDollar = 40;
let UAHInDollars;

for (let i = 10; i <= 100; i += 10) {
  UAHInDollars = UAHInOneDollar * i;
  console.log(`${i} dollars is ${UAHInDollars} UAH`);
}

// Exercise 3
let numberN = 147;

for (let i = 1; i <= 100; i++) {
  if (i * i <= numberN) {
    console.log(i);
  }
}

// Exercise 4
let integer = 113;
let intPrime = true;

if (integer <= 1) {
  console.log(`The number ${integer} is not prime`);
} else {
  for (let i = 2; i * i <= integer; i++) {
    if (integer % i === 0) {
      console.log(`The number ${integer} is not prime`);
      intPrime = false;
      break;
    }
  }

  if (intPrime) {
    console.log(`The number ${integer} is prime`);
  }
}

// Exercise 5
let number = 6561;
let originalNumber = number;
let count = 0;

if (number < 1) {
  console.log(`No! The number is negative`);
} else {
  while (number % 3 === 0) {
    number /= 3;
    count++;
  }

  if (number === 1) {
    console.log(`Yes! When raising 3 to the power of ${count} we get the number - ${originalNumber}`);
  } else {
    console.log(`No! When raising 3 to any power we do not get the number - ${originalNumber}`);
  }
}