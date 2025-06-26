const express = require('express');
const { createAnnouncement, getAnnouncements } = require('../controllers/announcementsController');
const router = express.Router();

router.post('/', createAnnouncement);
router.get('/', getAnnouncements);

module.exports = router;
