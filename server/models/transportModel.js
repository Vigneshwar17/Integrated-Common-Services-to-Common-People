const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['buses', 'services', 'vehicles', 'comparison'],
  },
  // For buses
  busNumber: String,
  startPoint: String,
  endPoint: String,
  route: String,
  timing: String,
  
  // For service centers and vehicle dealers
  name: String,
  address: String,
  contact: String,
  category: String,
  
  // For cost comparison
  model: String,
  minCharge: Number,
  perKm: Number,
  waitingCharge: Number,
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Transport', transportSchema);