const mongoose = require("mongoose");

const wrestlerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters'],
    trim: true
  },
  height: {
    type: String,
    required: [true, 'Height is required']
  },
  weight: {
    type: String,
    required: [true, 'Weight is required']
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    enum: ['Raw', 'SmackDown'] // Restrict to these values (optional)
  },
  signatureMove: {
    type: String,
    required: [true, 'Signature Move is required']
  },
  championships: {
    type: Number,
    default: 0,
    min: [0, 'Championships cannot be negative']
  },
  listOfChampionships: {
    type: [String],
    default: []
  }
}, { timestamps: true });

const Wrestler = mongoose.model("Wrestler", wrestlerSchema);
module.exports = Wrestler;
