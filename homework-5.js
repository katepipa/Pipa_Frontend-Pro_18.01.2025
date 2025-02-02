let yearOfBirth = prompt('What year were you born?');
let city = prompt('What city do you live in?');
let favSport = prompt('What is your favorite sport?');

let currentYear = new Date().getFullYear();

if (yearOfBirth !== null && yearOfBirth !== ' ' && !isNaN(yearOfBirth) 
&& (1900 <= yearOfBirth && yearOfBirth <= currentYear)) {
  let age = currentYear - parseInt(yearOfBirth);
  message = `Your age is ${age}\n`;
} else {
  message = `It's a pity you didn't want to enter your year of birth\n`;
}

if (city !== null && city !== ' ' && isNaN(city)) {
  switch (city) {
    case 'Kyiv':
      message += `You live in the capital of Ukraine\n`;
      break;
    case 'Washington':
      message += `You live in the capital of USA\n`;
      break;
    case 'London':
      message += `You live in the capital of Great Britain\n`;
      break;
    default:
      message += `You live in ${city} city\n`;
      break;
  }
} else {
  message += `It's a pity you didn't want to enter your city\n`;
}

if (favSport !== null && favSport !== ' ' && isNaN(favSport)) {
  switch (favSport) {
    case 'Football': 
      message += `Cool! You want to be Cristiano Ronaldo!`;
      break;
    case 'Boxing':
      message += `Cool! You want to be Oleksandr Usyk!`;
      break;
    case 'Basketball':
      message += `Cool! You want to be Lebron James!`;
      break;
    default:
      message += `Cool! You want to be a ${favSport} champion!`;
      break;   
  }
} else {
  message += `It's a pity you didn't want to enter your favourite sport`;
}

alert(message);