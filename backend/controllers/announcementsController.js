let announcements = []; // Temporary in-memory storage

exports.createAnnouncement = (req, res) => {
    const { title, content, targetAudience } = req.body;
    const newAnnouncement = {
        id: announcements.length + 1,
        title,
        content,
        targetAudience, // Example: ['student', 'faculty']
        author: "Admin",
        date: new Date().toISOString(),
    };
    announcements.push(newAnnouncement);
    res.status(201).json(newAnnouncement);
};

exports.getAnnouncements = (req, res) => {
    const { role } = req.query;
    const filtered = announcements.filter((a) => a.targetAudience.includes(role));
    res.json(filtered);
};
