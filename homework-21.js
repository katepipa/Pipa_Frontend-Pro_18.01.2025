const images = [
  "carcassone.jpg",
  "dubrovnik.jpg", 
  "granada.jpg", 
  "malaga.jpg", 
  "obidos.jpg", 
  "rothenburg.jpg", 
  "tallinn.jpg"
];

let currentIndexImg = 0;
function createSliderElements () {
  const buttonPrev = document.createElement("button");
  buttonPrev.classList.add("change-img-button", "change-img-button-prev");
  buttonPrev.textContent = "Prev";

  const imageSlider = document.createElement("img");
  imageSlider.setAttribute("src", `./images/${images[currentIndexImg]}`);
  imageSlider.setAttribute("alt", "");
  imageSlider.setAttribute("data-index", `${currentIndexImg}`);
  imageSlider.style.maxWidth = "500px";

  const buttonNext = document.createElement("button");
  buttonNext.classList.add("change-img-button", "change-img-button-next");
  buttonNext.textContent = "Next";

  const sliderGroup = document.querySelector(".image-slider-group");
  sliderGroup.appendChild(buttonPrev);
  sliderGroup.appendChild(imageSlider);
  sliderGroup.appendChild(buttonNext);
}

function changeImage () {
  const imageSlider = document.querySelector(".image-slider-group img");
  imageSlider.setAttribute("src", `./images/${images[currentIndexImg]}`);
  imageSlider.setAttribute("data-index", `${currentIndexImg}`);
}

function changeButtonsVisibility () {
  const buttonPrev = document.querySelector(".change-img-button-prev");
  const buttonNext = document.querySelector(".change-img-button-next");

  if (currentIndexImg === 0) {
    buttonPrev.style.display = "none";
  } else {
    buttonPrev.style.display = "inline-block";
  }

  if (currentIndexImg === images.length - 1) {
    buttonNext.style.display = "none";
  } else {
    buttonNext.style.display = "inline-block";
  }
}

function handleSwitchButton (event) {
  if (event.target.classList.contains("change-img-button-prev")) {
    currentIndexImg = (currentIndexImg - 1 + images.length) % images.length;
  } else if (event.target.classList.contains("change-img-button-next")) {
    currentIndexImg = (currentIndexImg + 1) % images.length;
  }
  changeImage();
  changeButtonsVisibility();
}

document.addEventListener("DOMContentLoaded", () => {
  createSliderElements();
  changeButtonsVisibility();
  document.querySelector(".image-slider-group").addEventListener("click", handleSwitchButton);
});