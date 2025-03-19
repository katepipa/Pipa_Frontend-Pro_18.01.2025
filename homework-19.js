let divElement;

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

    document.body.appendChild(divElement);
  }

  const inputElement = document.querySelector("input");
  const rectInputElement = inputElement.getBoundingClientRect();

  divElement.style.left = `${rectInputElement.right + 10}px`;
  divElement.style.top = `${rectInputElement.top}px`;
}

function removeInformativeDiv() {
  if (divElement) {
    document.body.removeChild(divElement);
    divElement = null;
  }
}

let link = "";

function getLink() {
  link = prompt(`Enter your link`);
}

function followLink() {
  secondButton = document.getElementById("transition-via-link");
  secondButton.setAttribute("href", link);
}