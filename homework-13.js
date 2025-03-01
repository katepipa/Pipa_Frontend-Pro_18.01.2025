const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);

function generateKey (length, characters) {
  let res = '';

  for (let i = 0; i < length; i++) {
    res += characters[Math.floor(Math.random() * characters.length)];
  }

  return res;
}