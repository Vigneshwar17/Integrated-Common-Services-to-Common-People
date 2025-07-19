const mongoose = require('mongoose');

const governmentServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['aadhaar', 'passport', 'schemes', 'pension'],
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
  },
  fee: {
    type: Number,
  },
  documents: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('GovernmentService', governmentServiceSchema);