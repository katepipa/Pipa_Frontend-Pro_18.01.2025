function generateList (arrayOfNumbers) {
  const ul = document.createElement("ul");

  arrayOfNumbers.forEach(number => {
    const li = document.createElement("li");

    if (Array.isArray(number)) {
      li.appendChild(generateList(number));
    } else {
      li.textContent = number;
    }

    ul.appendChild(li);
  });

  return ul;
}

const array = [1, 5, 8, [7, 90, 26], 16, 17, [1, 8], 17, [1, 2, 3], 16];

document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(generateList(array));
});