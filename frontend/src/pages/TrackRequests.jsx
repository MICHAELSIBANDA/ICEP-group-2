import "./TrackRequests.css";

const requests = [
  { id: 1, topic: "Math Tutoring", status: "Pending" },
  { id: 2, topic: "Programming Help", status: "Approved" },
];

function TrackRequests() {
  return (
    <div className="track-requests-container">
      <h2>Track Your Requests</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Topic</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.topic}</td>
              <td>{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrackRequests;
