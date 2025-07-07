const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

const port = 3000;

let emojis = [
  {
    id: 1,
    name: "Heart-eyes emoji",
    image: "/images/emoji1.svg",
    votes: 0,
  },
  {
    id: 2,
    name: "Happy emoji",
    image: "/images/emoji2.svg",
    votes: 0,
  },
  {
    id: 3,
    name: "Sad emoji",
    image: "/images/emoji3.svg",
    votes: 0,
  },
  {
    id: 4,
    name: "Sleepy emoji",
    image: "/images/emoji4.svg",
    votes: 0,
  },
  {
    id: 5,
    name: "Angry emoji",
    image: "/images/emoji5.svg",
    votes: 0,
  },
];

app.get("/emojis", (req, res) => {
  res.json(emojis);
});

app.post("/vote/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const emoji = emojis.find((emoji) => emoji.id === id);
  if (emoji) emoji.votes++;
  res.json(emojis);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
