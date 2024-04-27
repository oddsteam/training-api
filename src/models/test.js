const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, unique: true },
  courseName: String,
  trainers: [String],
  duration: String,
  maxParticipant: String,
  courseOutline: String,
  courseOutlineEn: String,
  courseOutlineTh: String,
  price: String,
  images: [String],
  createdAt: Date,
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

const TestModel = mongoose.model("Test", testSchema);

module.exports = TestModel;
