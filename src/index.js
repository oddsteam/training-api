// index.js
import express from "express";
import courseRouter from "./routers/course";
import classRouter from "./routers/class";
import bodyParser from "body-parser";
import { getCourse } from "./controllers/getCourse";

const mongoose = require('mongoose');
const EnrollmentModel = require('./models/enrollment');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());


mongoose.connect('mongodb+srv://admin:O3wztvd5tmuhUTNs@cluster0.jmlrtcw.mongodb.net/TrainingServiceDev');

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/courses", courseRouter);
app.use("/classes", classRouter);
app.get("/healthcheck", (req, res) => {
  res.send("Ok!");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
 try {
  await EnrollmentModel.create(req.body);
 } catch (error) {
  console.log(error);
 }
  res.send("register");
});

app.get("/course/:courseId", getCourse);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
