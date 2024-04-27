const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, unique: true },
  courseName: String,
  courseOutline: String,
  courseOutlineEn: String,
  createdAt: Date,
  duration: String,
  images: [String],
  maxParticipant: String,
  price: String,
  trainers: [String],
  courseOutlineTh: String
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
