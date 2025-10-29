const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  options: [optionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
pollSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
