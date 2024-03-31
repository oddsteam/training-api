const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classDetailsSchema = new Schema({
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

const classDeatilsModel = mongoose.model('Classes', classDetailsSchema);

module.exports = classDeatilsModel;