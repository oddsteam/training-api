const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  name: String,
});

const TrainerModel = mongoose.model('Trainer', trainerSchema);

module.exports = TrainerModel;