const images = [
  "carcassone.jpg",
  "dubrovnik.jpg",
  "granada.jpg",
  "malaga.jpg",
  "obidos.jpg",
  "rothenburg.jpg",
  "tallinn.jpg",
];

let currentIndexImg = 0;
let timerId = null;

/// Slider ///

function changeImage() {
  const imageSlider = document.querySelector(".image-slider-group img");
  const imageName = images[currentIndexImg];

  imageSlider.setAttribute("src", `./images/${imageName}`);
  imageSlider.setAttribute("alt", imageName.replace(".jpg", ""));
  imageSlider.setAttribute("data-index", `${currentIndexImg}`);
}

function handleSwitchButton(event) {
  if (event.target.classList.contains("change-img-button-prev")) {
    currentIndexImg = (currentIndexImg - 1 + images.length) % images.length;
  } else if (event.target.classList.contains("change-img-button-next")) {
    currentIndexImg = (currentIndexImg + 1) % images.length;
  }

  changeImage();
  restartAutoSlider();
}

/// Auto Slider ///

function runAutoSlider() {
  if (timerId !== null) return;
  timerId = setInterval(() => {
    currentIndexImg = (currentIndexImg + 1) % images.length;
    changeImage();
  }, 3000);
}

function stopAutoSlider() {
  clearInterval(timerId);
  timerId = null;
}

function restartAutoSlider() {
  stopAutoSlider();
  runAutoSlider();
}

/// Event Listener ///

document.addEventListener("DOMContentLoaded", () => {
  changeImage();
  runAutoSlider();

  document
    .querySelector(".image-slider-group")
    .addEventListener("click", handleSwitchButton);
});
