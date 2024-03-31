// index.js
import express from "express";
import courseRouter from "./routers/course";
import classDetailsRouter from "./routers/classDetails";
import bodyParser from "body-parser";
const mongoose = require('mongoose');
const EnrollmentModel = require('./models/enrollment');




const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:O3wztvd5tmuhUTNs@cluster0.jmlrtcw.mongodb.net/TraningServiceDev', {
  useNewUrlParser: true,
});
mongoose.connection.on('error', () => {
  throw new Error('unable to connect to database');
});
mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/courses", courseRouter);
app.use("/classes", classDetailsRouter);
app.get("/healthcheck", (req, res) => {
  res.send("Ok!");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  EnrollmentModel.create(req.body);
  res.send("register");
});

app.get("/course/:courseId", (req, res) => {
  const courseId = req.params.courseId;
  res.send({
    courseName: "Test Course",
    duration: "1",
    maxParticipant: "20",
    outline: "Fundamental: Why What and How of Design Thinking\n Workshop: How to facilitates and tools recommend\n Incremental: Do design thininkg by team",
    agenda: "course agenda",
    afterSaleService: "after sale service",
    images: ["a", "b"],
    trainer: [{
      name: "I AM",
      image: "c",
      experience: "trainer experience"
    }]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
