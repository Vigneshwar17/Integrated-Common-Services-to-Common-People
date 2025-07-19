const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['loan', 'insurance', 'investment', 'tax'],
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  interestRate: {
    type: Number,
  },
  features: [{
    type: String,
  }],
  eligibility: [{
    type: String,
  }],
  documents: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Finance', financeSchema);