const express = require('express');
const router = express.Router();
const Wrestler = require('../Models/Wrestler');

// ✅ GET all wrestlers
router.get('/', async (req, res) => {
  try {
    const wrestlers = await Wrestler.find();
    res.json(wrestlers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch wrestlers' });
  }
});

// ✅ POST - Create new wrestler
router.post('/', async (req, res) => {
  try {
    const newWrestler = new Wrestler(req.body);
    await newWrestler.save();
    res.status(201).json(newWrestler);
  } catch (err) {
    // Mongoose validation error
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    res.status(500).json({ error: 'Failed to create wrestler' });
  }
});

// ✅ PUT - Update wrestler by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedWrestler = await Wrestler.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true // 🛡️ Enforce validation on update
      }
    );
    res.json(updatedWrestler);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ error: messages.join(', ') });
    }
    res.status(500).json({ error: 'Failed to update wrestler' });
  }
});

// ✅ DELETE - Remove wrestler
router.delete('/:id', async (req, res) => {
  try {
    await Wrestler.findByIdAndDelete(req.params.id);
    res.json({ message: 'Wrestler deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete wrestler' });
  }
});

module.exports = router;
