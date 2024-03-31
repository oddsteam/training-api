// index.js
import express from "express";
import courseRouter from "./routers/course";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/courses", courseRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
