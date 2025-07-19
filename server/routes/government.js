const express = require('express');
const router = express.Router();
const GovernmentService = require('../models/governmentModel');

// Get all government services
router.get('/', async (req, res) => {
  try {
    const services = await GovernmentService.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get services by category
router.get('/category/:category', async (req, res) => {
  try {
    const services = await GovernmentService.find({ category: req.params.category });
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new service
router.post('/', async (req, res) => {
  try {
    const service = new GovernmentService(req.body);
    const savedService = await service.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;