import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:3001/api/announcements", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setAnnouncements(data));
  }, [token]);

  const formatDate = (dateValue) => {
  const date = new Date(dateValue);
  return isNaN(date.getTime())
    ? "N/A"
    : date.toLocaleDateString();
};


  return (
    <Layout>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Announcements & Events
      </h2>

      {announcements.length === 0 ? (
        <p className="text-gray-600">No announcements available.</p>
      ) : (
        <div className="space-y-4">
          {announcements.map(a => (
            <div key={a.id} className="bg-white p-5 rounded shadow">
              <h3 className="font-semibold text-lg">{a.title}</h3>
              <p className="text-gray-700 mt-2">{a.message}</p>
              <span className="text-xs text-gray-500">
                {formatDate(a.createdAt)}
              </span>

            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Announcements;
