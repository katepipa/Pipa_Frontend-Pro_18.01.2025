let votes = [];

function createVotingElements () {
  const images = ["emoji1.svg", "emoji2.svg", "emoji3.svg", "emoji4.svg", "emoji5.svg"];

  votes = new Array(images.length).fill(0);

  images.forEach((emoji, index) => {
    const voteGroup = document.createElement("div");
    voteGroup.classList.add("vote-for-emoji-group");
    voteGroup.style.display = "flex";
    voteGroup.style.flexDirection = "column";
    voteGroup.style.alignItems = "center";

    const counterP = document.createElement("p");
    counterP.textContent = votes[index];
    counterP.classList.add("vote-counter");

    const buttonEmoji = document.createElement("button");
    buttonEmoji.classList.add("emoji-button");
    buttonEmoji.style.background = "none";
    buttonEmoji.style.border = "none";
    buttonEmoji.style.cursor = "pointer";
    buttonEmoji.style.padding = "10px";

    const imgEmoji = document.createElement("img");
    imgEmoji.setAttribute("src", `./images/${emoji}`);
    imgEmoji.setAttribute("alt", "");
    imgEmoji.setAttribute("data-index", `${index}`);
    imgEmoji.style.width = "50px";
    imgEmoji.style.height = "auto";
    imgEmoji.style.transition = "transform 0.2s ease-in-out";
    
    buttonEmoji.appendChild(imgEmoji);
    voteGroup.appendChild(buttonEmoji);
    voteGroup.appendChild(counterP);

    const emojiNav = document.querySelector(".emoji-nav");
    emojiNav.appendChild(voteGroup);
  });
}

function updateVoteCounter (index) {
  votes[index]++;

  const counters = document.querySelectorAll(".vote-counter");
  counters[index].textContent = votes[index];
}

function handleVoteClick (event) {
  if (event.target.tagName === "IMG") {
    const index = event.target.getAttribute("data-index");

    if (index !== null) {
      updateVoteCounter(Number(index));
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createVotingElements();
  document.querySelector(".emoji-nav").addEventListener("click", handleVoteClick);
});