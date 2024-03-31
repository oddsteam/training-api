// index.js
import express from "express";
import courseRouter from "./routers/course";
import classRouter from "./routers/class";
import bodyParser from "body-parser";
import { getCourse } from "./controllers/getCourse";
import { enrollment } from "./controllers/enrollment";
var cors = require('cors');

const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

mongoose.connect('mongodb+srv://admin:O3wztvd5tmuhUTNs@cluster0.jmlrtcw.mongodb.net/TrainingServiceDev');

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/courses", courseRouter);
app.use("/classes", classRouter);
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

app.post("/register", enrollment);

app.get("/course/:courseId", getCourse);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
