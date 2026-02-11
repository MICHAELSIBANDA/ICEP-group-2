import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to CampusConnect Dashboard</h1>
      <p>Choose an action below:</p>

      <div className="dashboard-buttons">
        <Link to="/request-support">
          <button className="btn">Request Support</button>
        </Link>

        <Link to="/announcements">
          <button className="btn">View Announcements</button>
        </Link>

        <Link to="/track-requests">
          <button className="btn">Track Requests</button>
        </Link>

        <Link to="/feedback">
          <button className="btn">Submit Feedback</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;