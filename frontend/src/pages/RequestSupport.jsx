import { useState } from "react";
import "./RequestSupport.css";

function RequestSupport() {
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request submitted:", { topic, details });

    setSubmitted(true);
    setTopic("");
    setDetails("");
  };

  return (
    <div className="request-support-container">
      <h2>Request Academic Support</h2>

      {submitted && (
        <p className="success">Request submitted successfully!</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RequestSupport;
