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


mongoose.connect('mongodb+srv://admin:O3wztvd5tmuhUTNs@cluster0.jmlrtcw.mongodb.net/TrainingServiceDev');

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/courses", courseRouter);
app.use("/classes", classDetailsRouter);
app.get("/healthcheck", (req, res) => {
  res.send("Ok!");
});

app.get("/classes/:classId", (req, res) => {
  res.send({
    name: "SCRUM MASTER COMPASS", // class detail
    description: `ตอนผู้สอนทั้ง 2 มาเป็น ScrumMaster ใหม่ ๆ เราพบช่วงเวลายากลำบากหลายครั้ง`,
    place: "Geeky Base All Star",
    googleMapUrl: "https://maps.app.goo.gl/UQKuNzejJNNwVB2K9",
    startDate: "31/3/2024",
    ensDate: "31/3/2024",
    startTime: "9:00",
    endTime: "17:00",
  });
});

app.get("/classes/:classId/remaing", (req, res) => {
  res.send({
    remaing: 1, // จำนวนที่นั่งที่เหลืออยู่
  });
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
