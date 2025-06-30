const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

let orders = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.post("/orders", (req, res) => {
  console.log(req.body);
  orders.push({ ...req.body, id: +new Date() });
  res.json(orders);
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
