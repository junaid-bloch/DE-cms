import React, { useEffect, useState } from "react";

interface Announcement {
  _id: string;
  title: string;
  content: string;
  audience: string;
  date: string;
}

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/announcements");
        const data: Announcement[] = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div>
      <h1>Announcements</h1>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement._id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.content}</p>
            <small>Audience: {announcement.audience}</small>
            <br />
            <small>
              Date: {new Date(announcement.date).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
