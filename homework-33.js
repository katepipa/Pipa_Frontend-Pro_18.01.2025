const countBtn = document.getElementById("countBtn");
const stopBtn = document.getElementById("stopBtn");
const outputDiv = document.getElementById("output");

const imgArray = [
  "./images/number-0.png",
  "./images/number-1.png",
  "./images/number-2.png",
  "./images/number-3.png",
  "./images/number-4.png",
  "./images/number-5.png",
  "./images/number-6.png",
  "./images/number-7.png",
  "./images/number-8.png",
  "./images/number-9.png",
];

function Clock(element) {
  this.element = element;
  this.imgElements = Array.from(this.element.querySelectorAll("img"));
  this.prevDigits = Array(6).fill(null);
  this.timerId = null;

  this.setup = function () {
    if (this.timerId !== null) return;
    this.timerId = setInterval(this.updateClock.bind(this), 1000);
  };

  this.updateClock = function () {
    const date = new Date();
    const timeStr =
      date.getHours().toString().padStart(2, "0") +
      date.getMinutes().toString().padStart(2, "0") +
      date.getSeconds().toString().padStart(2, "0");

    for (let i = 0; i < 6; i++) {
      const digit = parseInt(timeStr[i], 10);

      if (this.prevDigits[i] !== digit) {
        this.imgElements[i].src = imgArray[digit];
        this.prevDigits[i] = digit;
      }
    }
  };

  this.stop = function () {
    clearInterval(this.timerId);
    this.timerId = null;
  };
}

const clock = new Clock(outputDiv);

countBtn.addEventListener("click", clock.setup.bind(clock));
stopBtn.addEventListener("click", clock.stop.bind(clock));
