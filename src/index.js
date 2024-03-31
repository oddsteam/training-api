// index.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/healthcheck", (req, res) => {
  res.send("Ok!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
