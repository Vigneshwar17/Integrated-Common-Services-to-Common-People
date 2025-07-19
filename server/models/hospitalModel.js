const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 4.0,
  },
  services: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['hospital', 'diagnostic', 'emergency', 'nursing'],
    default: 'hospital',
  },
  specialties: [{
    type: String,
  }],
  emergency: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Hospital', hospitalSchema);