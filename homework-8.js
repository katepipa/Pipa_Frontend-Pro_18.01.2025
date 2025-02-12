// Exercise 1
let str = '';

for (let i = 10; i <= 20; i++) {
  str += i;
  if (i < 20) {
    str += ', ';
  }
}

console.log(str);

// Exercise 2
// let str = '';

// for (let i = 10; i <= 20; i++) {
//   str += (i * i) + (i < 20 ? ', ' : '');
// }

// console.log(str);

// Exercise 3
// let res;
// let str = '';

// for (let i = 0; i <= 10; i++) {
//   res = 7 * i;
//   str = '7 * ' + i + ' = ' + res;
//   console.log(str);
// }

// Exercise 4 
// let sum = 0;

// for (let i = 1; i <= 15; i++) {
//   sum += i;
// }

// console.log(sum);

// Exercise 5
// let product = 1n;

// for (let i = 15n; i <= 35n; i++) {
//   product *= i;
// }

// console.log(product);

// Exercise 6
// let sum = 0;
// let amountOfNum = 0;

// for (let i = 1; i <= 500; i++) {
//   sum += i;
//   amountOfNum++;
// }

// let average = sum / amountOfNum; 
// console.log(average);

// Exercise 7
// let sum = 0;

// for (let i = 30; i <= 80; i +=2) {
//   sum += i;
// }

// console.log(sum);

// Exercise 8
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// Exercise 9 + 10 + 11
// let num = 48;
// let evenDivisors = 0;
// let sum = 0;

// console.log(`The divisors of a number ${num} are:`);

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//     if (i % 2 === 0) {
//       evenDivisors++;
//       sum += i;
//     }
//   }
// }

// console.log(`The amount of even divisors are: ${evenDivisors}`);
// console.log(`The sum of even divisors are: ${sum}`);

// Exercise 12
// for (let i = 1; i <= 10; i++) {
//   let strRow = '';
//   for (j = 1; j <= 10; j++) {
//     strRow += (i * j) + '\t';
//   }
//   console.log(strRow);
// }