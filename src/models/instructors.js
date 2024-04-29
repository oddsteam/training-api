const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructor = new Schema({
  _id: { type: Schema.Types.ObjectId, unique: true },
  name: String,
  image: String,
}, {
  versionKey: false
});

const InstructorModel = mongoose.model("Instructor", instructor);

module.exports = InstructorModel;
