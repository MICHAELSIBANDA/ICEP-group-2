import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getUserFromToken } from "../utils/auth";

function AdminReport() {
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
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

    fetchReport();
    // eslint-disable-next-line
  }, [navigate]);

  const fetchReport = async () => {
    const res = await fetch("http://localhost:3001/api/admin/report", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setReport(data);
  };

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-6">Admin Report</h2>

      {!report ? (
        <p>Loading report...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-4">Totals</h3>
            <ul className="text-sm space-y-2">
              <li>Total Announcements: {report.totalAnnouncements}</li>
              <li>Total Feedback: {report.totalFeedback}</li>
              <li>Total Students: {report.totalStudents}</li>
              <li>Total Support Requests: {report.totalSupport}</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-4">Support Requests by Status</h3>
            {report.supportByStatus && Object.keys(report.supportByStatus).length === 0 ? (
              <p className="text-sm text-gray-600">No support requests.</p>
            ) : (
              <ul className="text-sm space-y-2">
                {Object.entries(report.supportByStatus).map(([status, count]) => (
                  <li key={status}>{status}: {count}</li>
                ))}
              </ul>
            )}

            <div className="mt-6">
              <h4 className="font-semibold">Average Feedback Rating</h4>
              <p className="text-sm">{report.avgRating ? `${report.avgRating} / 5` : 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default AdminReport;
