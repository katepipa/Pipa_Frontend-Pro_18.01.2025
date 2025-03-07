// Test 1 - Word Boundaries
let regexPattern1 = /\bword\b/i;

let text1 = 'My WoRd thf';

console.log(text1.match(regexPattern1));

// Test 2 - Capitalizing
let text2 = 'i`m replacing it. am i not?';

let result = text2.replace(/\bi\b/g, 'I');

console.log(result);

// Test 3 - Uppercase Consonants
let text3 = 'ABcDyYRtW';

let count = (text3.match(/[BCDFGHJKLMNPQRSTVWXYZ]/g)).length;

console.log(count);

// Test 4 - Retrieve Numbers
let text4 = '1234, 67, 78, 6, 2435, 78, 9, 17';

let countIntegers = (text4.match(/\d+/g)).length;

console.log(countIntegers);

// Test 5 - Whitespace
let text5 = 'Hi my    name is Kateryna';

let moreThan4Occurancies = /\s{4,}/g.test(text5);

console.log(moreThan4Occurancies);