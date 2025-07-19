const express = require('express');
const router = express.Router();
const Finance = require('../models/financeModel');

// Get all finance services
router.get('/', async (req, res) => {
  try {
    const services = await Finance.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get services by type
router.get('/type/:type', async (req, res) => {
  try {
    const services = await Finance.find({ type: req.params.type });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get loan information
router.get('/loans', async (req, res) => {
  try {
    const loans = await Finance.find({ type: 'loan' });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new finance service
router.post('/', async (req, res) => {
  try {
    const service = new Finance(req.body);
    const savedService = await service.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;