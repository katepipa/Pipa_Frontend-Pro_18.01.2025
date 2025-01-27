const SECONDS_PER_HOUR = 3600;
let userInput = prompt('Hi! Enter the number of hours');
let numberOfHours = Number(userInput);
let numberOfSeconds = SECONDS_PER_HOUR * numberOfHours;
alert('The number of seconds in ' + numberOfHours + ' hours is ' + numberOfSeconds); 