const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classDetailsSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, unique: true },
    courseName: String,
    className: String,
    description: String,
    place: String,
    googleMapUrl: String,
    startDate: Date,
    endDate: Date,
    startTime: String,
    endTime: String,
    category: [String],
    prerequisite: String,
    classGoal: String,
    maxParticipant: String,
    preClassContent: String,
    intructure: [{
        email: String,
        name: String,
        experience: String,
    }]
}, {
    versionKey: false
});

const ClassDeatilsModel = mongoose.model('Classes', classDetailsSchema);

module.exports = ClassDeatilsModel;