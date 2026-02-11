import "./Announcements.css";

const announcements = [
  { id: 1, title: "Campus Hackathon", date: "2026-03-15" },
  { id: 2, title: "Library Closed for Maintenance", date: "2026-03-10" },
  { id: 3, title: "New Tutoring Schedule Released", date: "2026-03-05" },
];

function Announcements() {
  return (
    <div className="announcements-container">
      <h2>Campus Announcements</h2>

      <ul>
        {announcements.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <br />
            <small>{item.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;
