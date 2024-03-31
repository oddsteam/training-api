const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({
  fullName: String,
  phoneNumber: String,
  company: String,
  classId: String,
  email: String,
  createDate: Date
});

enrollmentSchema.pre('save', function (next) {
    this.createDate = new Date();
    next();
});

const EnrollmentModel = mongoose.model('Enrollment', enrollmentSchema);

module.exports = EnrollmentModel;