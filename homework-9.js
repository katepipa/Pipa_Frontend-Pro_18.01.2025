// Exercise 1
// let str = '';

// for (let i = 20; i <= 30; i += 0.5) {
//   str += i + (i < 30 ? ' ' : '');
// }

// console.log(str);

// Exercise 2
// const UAHInOneDollar = 40;
// let UAHInDollars;

// for (let i = 10; i <= 100; i += 10) {
//   UAHInDollars = UAHInOneDollar * i;
//   console.log(`${i} dollars is ${UAHInDollars} UAH`);
// }

// Exercise 3
// let integer = 145;

// for (let i = 1; i <= 100; i++) {
//   if (i * i <= integer) {
//     console.log(i);
//   }
// }

// Exercise 4 - Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).
let number = 50;

if (number > 1) {
  for (let i = 1; i <= number; i++) {
    if (number % i !== 0) {
      console.log(`The number ${number} is prime number`);
    } else {
      console.log(`The number ${number} is not prime number`);
    }
  }
} else {
  console.log(`The number ${number} is not prime number`);
}