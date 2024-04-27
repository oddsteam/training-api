const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, unique: true },
  name: String,
  image: String
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

const TrainerModel = mongoose.model('Trainer', trainerSchema);

module.exports = TrainerModel;