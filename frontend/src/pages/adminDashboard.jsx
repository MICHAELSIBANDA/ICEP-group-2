import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getUserFromToken } from "../utils/auth";

function AdminDashboard() {
  const navigate = useNavigate();
  const [supportRequests, setSupportRequests] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const user = getUserFromToken();

    if (!user) {
    navigate("/login");
    return;
  }

    if (user.role !== "admin") {
      navigate("/dashboard");
      return;
    }

    fetchSupport();
    fetchFeedback();
    // eslint-disable-next-line
  }, [navigate]);

  const fetchSupport = async () => {
    const res = await fetch(`https://icep-group-2.onrender.com/api/admin/support`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const data = await res.json();
    setSupportRequests(data);
  };

  const fetchFeedback = async () => {
    const res = await fetch(`https://icep-group-2.onrender.com/api/admin/feedback`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const data = await res.json();
    setFeedbackList(data);
  };

  const updateStatus = async (id, status) => {
    await fetch(`https://icep-group-2.onrender.com/api/admin/support/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ status })
    });
    fetchSupport(); // Refresh the support requests list
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Admin Dashboard
      </h2>

      {/* Support Requests */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h3 className="font-semibold mb-4">
          All Support Requests
        </h3>

        {supportRequests.length === 0 ? (
          <p className="text-sm text-gray-600">No requests.</p>
        ) : (
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Student ID</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {supportRequests.map(r => (
                <tr key={r.id}>
                  <td className="border p-2">{r.studentId}</td>
                  <td className="border p-2">{r.type}</td>
                  <td className="border p-2">{r.description}</td>
                  <td className="border p-2">
                    <select
                      value={r.status}
                      onChange={(e) => updateStatus(r.id, e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Feedback */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-semibold mb-4">
          All Feedback
        </h3>

        {feedbackList.length === 0 ? (
          <p className="text-sm text-gray-600">No feedback.</p>
        ) : (
          <ul className="space-y-2 text-sm">
  {feedbackList.map(f => (
    <li
      key={f.id}
      className="border p-3 rounded bg-gray-50"
    >
      <p className="font-medium mb-1">
        {f.message}
      </p>

      <p className="text-sm text-gray-700">
        Rating: ⭐ {f.rating}/5
      </p>

      <p className="text-xs text-gray-500">
        Student ID: {f.studentId}
      </p>

      <p className="text-xs text-gray-400">
        {new Date(f.date).toLocaleDateString()}
      </p>
    </li>
  ))}
</ul>

        )}
      </div>
    </Layout>
  );
}

export default AdminDashboard;
