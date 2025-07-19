const express = require('express');
const router = express.Router();
const Transport = require('../models/transportModel');

// Get all transport data
router.get('/', async (req, res) => {
  try {
    const transport = await Transport.find();
    res.json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get transport data by type
router.get('/type/:type', async (req, res) => {
  try {
    const transport = await Transport.find({ type: req.params.type });
    res.json(transport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get bus routes
router.get('/buses', async (req, res) => {
  try {
    const buses = await Transport.find({ type: 'buses' });
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get service centers
router.get('/services', async (req, res) => {
  try {
    const services = await Transport.find({ type: 'services' });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new transport entry
router.post('/', async (req, res) => {
  try {
    const transport = new Transport(req.body);
    const savedTransport = await transport.save();
    res.status(201).json(savedTransport);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;