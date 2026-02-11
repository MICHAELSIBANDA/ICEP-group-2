import { useState } from "react";
import Layout from "../components/Layout";

function AdminAnnouncements() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch(
      "http://localhost:3001/api/announcements",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, message })
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Failed to post announcement");
      return;
    }

    setSuccess("Announcement posted successfully!");
    setTitle("");
    setMessage("");
  };

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-6">
        Post Announcement
      </h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}
      {success && <p className="text-green-600 mb-3">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full border p-2 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Post Announcement
        </button>
      </form>
    </Layout>
  );
}

export default AdminAnnouncements;
