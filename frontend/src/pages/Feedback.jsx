import { useState } from "react";
import "./Feedback.css";

function Feedback() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", message);

    setSubmitted(true);
    setMessage("");
  };

  return (
    <div className="feedback-container">
      <h2>Submit Feedback</h2>

      {submitted && (
        <p className="success">Thank you for your feedback!</p>
      )}

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
