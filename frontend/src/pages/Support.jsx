import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Support() {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchMyRequests();
    // eslint-disable-next-line
  }, []);

  const fetchMyRequests = async () => {
    try {
      const response = await fetch(
        `https://icep-group-2.onrender.com/api/support`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();
      setRequests(data);
    } catch (err) {
      setError("Failed to load support requests");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!type || !description) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(
        `https://icep-group-2.onrender.com/api/support`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ type, description })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to submit request");
        return;
      }

      setSuccess("Support request submitted successfully!");
      setType("");
      setDescription("");
      fetchMyRequests();

    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <Layout>
        <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          Support Requests
        </h1>

        {/* Create Request */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold mb-4">
            Create New Request
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
            <div>
              <label className="block text-sm font-medium mb-1">
                Request Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select type</option>
                <option value="IT Support">IT Support</option>
                <option value="Academic">Academic</option>
                <option value="Financial">Financial</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
                rows="4"
                placeholder="Describe your issue..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* My Requests */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">
            My Requests
          </h2>

          {requests.length === 0 ? (
            <p className="text-gray-600 text-sm">
              No support requests yet.
            </p>
          ) : (
            <table className="w-full text-sm border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Type</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req.id}>
                    <td className="border p-2">{req.type}</td>
                    <td className="border p-2">{req.description}</td>
                    <td className="border p-2">{req.status}</td>
                    <td className="border p-2">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
    </Layout>

    
  );
}

export default Support;
