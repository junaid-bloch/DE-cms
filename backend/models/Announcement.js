const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    audience: { type: String, enum: ['student', 'faculty', 'admin'], required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Announcement', AnnouncementSchema);
