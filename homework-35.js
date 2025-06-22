const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("btn-send");
const answerBlock = document.getElementById("answer-block");

let stopChat = false;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showRandomResponse() {
  const delayTime = Math.floor(Math.random() * 10000) + 1000;
  await delay(delayTime);

  const browserResponses = [
    "Hello!",
    "Sorry, I was buffering, okay, ready!",
    "My circuits feel chilly today but I am warming up to your question!",
    "How are you?",
    "It feels like the weather is great now!",
    "What's currently going on?",
    "Rainy in my data center, but your question just brightened the mood",
    "I was in sleep mode… your message woke me up. Let’s roll!",
    "You seem to be very friendly!",
    "Sorry, I am busy now",
    "This is the end of our conversation",
  ];

  const randomIndex = Math.floor(Math.random() * browserResponses.length);
  return browserResponses[randomIndex];
}

function appendMessage(sender, message) {
  const p = document.createElement("p");
  p.textContent = `${sender}: ${message}`;
  p.classList.add(sender === "You" ? "user-message" : "bot-message");
  answerBlock.appendChild(p);
  answerBlock.scrollTop = answerBlock.scrollHeight;
  showElement(answerBlock);
}

/// Hide / Show functions ///

function hideElement(element) {
  element.classList.add("hidden");
}

function showElement(element) {
  element.classList.remove("hidden");
}

/// Event Listener ///

sendBtn.addEventListener("click", async () => {
  if (stopChat) return;

  const userMessage = chatInput.value.trim();
  chatInput.value = "";

  if (!userMessage) return;

  appendMessage("You", userMessage);

  if (userMessage === "My watch has ended") {
    appendMessage("Browser", "Goodbye!");
    stopChat = true;
    return;
  }

  const browserResponse = await showRandomResponse();
  appendMessage("Browser", browserResponse);

  if (browserResponse === "This is the end of our conversation") {
    appendMessage("Browser", "I am shutting down now...");
    stopChat = true;
  }
});
