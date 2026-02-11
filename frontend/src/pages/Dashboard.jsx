import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function Dashboard() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      navigate("/login");
      return;
    }

    setToken(storedToken);
  }, [navigate]);

  return (
    <Layout>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Student Dashboard
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Announcements */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">
            Announcements
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            View important campus announcements.
          </p>
          <button
            onClick={() => navigate("/announcements")}
            className="text-blue-600 font-medium hover:underline"
          >
            View Announcements →
          </button>
        </div>

        {/* Support Requests */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">
            Support Requests
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Submit and track your support requests.
          </p>
          <button
            onClick={() => navigate("/support")}
            className="text-blue-600 font-medium hover:underline"
          >
            Go to Support →
          </button>
        </div>

        {/* Feedback */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">
            Feedback
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Send feedback to improve campus services.
          </p>
          <button
            onClick={() => navigate("/feedback")}
            className="text-blue-600 font-medium hover:underline"
          >
            Give Feedback →
          </button>
        </div>

      </div>

      {/* Debug Token (optional, remove later) */}
      <div className="mt-8 text-xs text-gray-500 break-all">
        <strong>JWT Token:</strong> {token}
      </div>
    </Layout>
  );
}

export default Dashboard;
