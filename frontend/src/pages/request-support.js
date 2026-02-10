// src/pages/requestsupport.js
import React, { useState } from "react";

function RequestSupport() {
  const [module, setModule] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Support Requested!\nModule: ${module}\nDescription: ${description}`);
    setModule("");
    setDescription("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Request Academic Support</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {/* Support Type (fixed to Tutoring) */}
        <div>
          <label className="block font-semibold mb-1">Support Type</label>
          <input
            type="text"
            value="Tutoring"
            disabled
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          />
        </div>

        {/* Module selection */}
        <div>
          <label className="block font-semibold mb-1">Module</label>
          <select
            value={module}
            onChange={(e) => setModule(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">-- Select Module --</option>
            <option value="Software Dev">Software Development</option>
            <option value="Database Prog">Database Programming</option>
            <option value="Mobile Comp">Mobile Computing</option>
            <option value="Web Dev">Web Development</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Describe your issue</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full p-2 border rounded"
            placeholder="Explain your academic issue..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestSupport;
