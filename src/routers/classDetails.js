import express from "express";
import { getClassDetails } from "../controllers/classDetails";

const router = express.Router();

router.get("/", getClassDetails);

export default router;



// app.get("/classes/:classId", (req, res) => {

//   res.send({
//     name: "SCRUM MASTER COMPASS", // class detail
//     description: `ตอนผู้สอนทั้ง 2 มาเป็น ScrumMaster ใหม่ ๆ เราพบช่วงเวลายากลำบากหลายครั้ง`,
//     place: "Geeky Base All Star",
//     googleMapUrl: "https://maps.app.goo.gl/UQKuNzejJNNwVB2K9",
//     startDate: "31/3/2024",
//     ensDate: "31/3/2024",
//     startTime: "9:00",
//     endTime: "17:00",
//   });
// });


// app.get("/classes/:classId/remaing", (req, res) => {
//   res.send({
//     remaing: 1, // จำนวนที่นั่งที่เหลืออยู่
//   });
// });