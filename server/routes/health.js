const express = require('express');
const router = express.Router();
const Hospital = require('../models/hospitalModel');

// Get all hospitals
router.get('/hospitals', async (req, res) => {
  try {
    const hospitals = await Hospital.find({ type: 'hospital' });
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get hospitals by area
router.get('/hospitals/area/:area', async (req, res) => {
  try {
    const hospitals = await Hospital.find({ 
      area: req.params.area,
      type: 'hospital'
    });
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get diagnostic centers
router.get('/diagnostic', async (req, res) => {
  try {
    const centers = await Hospital.find({ type: 'diagnostic' });
    res.json(centers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get emergency services
router.get('/emergency', async (req, res) => {
  try {
    const services = await Hospital.find({ emergency: true });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new hospital
router.post('/hospitals', async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    const savedHospital = await hospital.save();
    res.status(201).json(savedHospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;