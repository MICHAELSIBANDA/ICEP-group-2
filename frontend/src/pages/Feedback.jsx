import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Feedback() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchMyFeedback();
    // eslint-disable-next-line
  }, []);

  const fetchMyFeedback = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/feedback",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();
      setFeedbackList(data);
    } catch (err) {
      setError("Failed to load feedback");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!message) {
      setError("Feedback message is required.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ message })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to submit feedback");
        return;
      }

      setSuccess("Feedback submitted successfully!");
      setMessage("");
      fetchMyFeedback();

    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <Layout>
        <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          Feedback
        </h1>

        {/* Submit Feedback */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Submit Feedback
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              rows="4"
              placeholder="Write your feedback here..."
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* My Feedback */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">
            My Feedback
          </h2>

          {feedbackList.length === 0 ? (
            <p className="text-gray-600 text-sm">
              No feedback submitted yet.
            </p>
          ) : (
            <ul className="space-y-3 text-sm">
              {feedbackList.map((fb) => (
                <li
                  key={fb.id}
                  className="border rounded p-3"
                >
                  <p className="mb-1">{fb.message}</p>
                  <span className="text-gray-500 text-xs">
                    {new Date(fb.createdAt).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
    </Layout>
    
  );
}

export default Feedback;
