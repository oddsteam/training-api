const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    courseName: String,
    className: String,
    description: String,
    place: String,
    googleMapUrl: Date,
    startDate: String,
    endDate: String,
    startTime: String,
    endTime: String,
    category: String,
    prerequisite: String,
    classGoal: String,
    maxParticipant: String,
});

const ClassModel = mongoose.model('Classes', classSchema);

module.exports = classDeatilsModel;