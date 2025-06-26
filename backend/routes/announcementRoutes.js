const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');

// Get all announcements
router.get('/', async (req, res) => {
    try {
        const audience = req.query.audience; // Optional audience filter
        const filter = audience ? { audience } : {};
        const announcements = await Announcement.find(filter);
        res.json(announcements);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Create a new announcement
router.post('/', async (req, res) => {
    try {
        const { title, content, audience } = req.body;
        const newAnnouncement = new Announcement({ title, content, audience });
        await newAnnouncement.save();
        res.status(201).json(newAnnouncement);
    } catch (error) {
        res.status(400).json({ error: 'Invalid data' });
    }
});

module.exports = router;
