const mongoose = require('mongoose');
const TrainerModel = require('./trainer');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseName: String,
  duration: String,
  outline: String,
  images: [String],
  trainers: [TrainerModel]
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;