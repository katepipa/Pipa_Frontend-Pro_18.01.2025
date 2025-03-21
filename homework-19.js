let divElement = null;

function displayInformativeDiv() {
  if (!divElement) {
    divElement = document.createElement("div");
    const pElement = document.createElement("p");

    pElement.innerHTML = "Please enter your name. It must not exceed 20 characters in length";
    divElement.appendChild(pElement);

    divElement.style.background = "#FFC0CB";
    divElement.style.padding = "10px";
    divElement.style.position = "absolute";
    divElement.style.maxWidth = "220px"
    divElement.style.border = "2px solid #8E1450";
    divElement.style.borderRadius = "10px";
    divElement.style.zIndex = "1000";

    document.body.appendChild(divElement);
  }

  const inputElement = document.getElementById("name");
  const rectInputElement = inputElement.getBoundingClientRect();

  divElement.style.left = `${window.scrollX + rectInputElement.right + 10}px`;
  divElement.style.top = `${window.scrollY + rectInputElement.top}px`;
}

function removeInformativeDiv() {
  if (divElement) {
    document.body.removeChild(divElement);
    divElement = null;
  }
}

let link = "";

function getLink(event) {
  event.preventDefault();

  let userInput = prompt(`Enter your link`).trim();

  if (!userInput) {
    alert(`You didn't enter the link, try again please`);
    return;
  } 

  const siteProtocol = /^https?:\/\//;
  const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w]{2,}(\/\S*)?$/;

  if (!urlPattern.test(userInput)) {
    alert(`Invalid link, please enter a valid URL`);
    return
  }

  link = siteProtocol.test(userInput) ? userInput : "https://" + userInput;
}

function followLink() {
  followLinkButton = document.getElementById("transition-via-link");
  followLinkButton.setAttribute("href", link);

  if (!link) {
    alert(`There is no link to go to the site :( Press the button "Enter link" and enter your link`);
  }
}

function createTable () {
  let table = document.getElementsByTagName("table")[0];

  table.style.border = "3px solid #8E1450";
  table.setAttribute("cellpadding", "15");

  let tBody = document.createElement("tbody");
  table.appendChild(tBody);

  let counter = 1;

  for (let i = 0; i < 10; i++) {
    let tableRow = document.createElement("tr");
    tBody.appendChild(tableRow);

    for (let j = 0; j < 10; j++) {
      let tableCell = document.createElement("td");
      tableCell.textContent = counter;

      tableCell.style.border = "1px solid #8E1450";
      tableCell.style.textAlign = "center";

      tableRow.appendChild(tableCell);

      counter++;
    }
  }
}

document.addEventListener("DOMContentLoaded", createTable);

let pathToImages = "";

function showRandomImage () {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
  let randomIndex = Math.floor(Math.random() * images.length);

  pathToImages = "./images/" + images[randomIndex];

  let image = document.createElement("img");
  image.setAttribute("alt", "");
  image.setAttribute("src", pathToImages);
  image.style.maxWidth = "500px";
  let container = document.querySelector(".image-container");
  container.style.float = "right";

  container.appendChild(image);
}

document.addEventListener("DOMContentLoaded", showRandomImage);