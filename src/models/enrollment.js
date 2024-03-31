const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enrollmentSchema = new Schema({
  fullName: String,
  phoneNumber: String,
  company: String,
});

const EnrollmentModel = mongoose.model('Enrollment', enrollmentSchema);

module.exports = EnrollmentModel;