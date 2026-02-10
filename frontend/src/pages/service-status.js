// src/pages/ServiceStatus.js
import React from "react";

const mockRequests = [
  { id: 1, type: "Tutoring", module: "Software Dev", submitted: "2026-02-05", status: "Pending" },
  { id: 2, type: "Tutoring", module: "Database Prog", submitted: "2026-02-06", status: "Accepted" },
];

function ServiceStatus() {
  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Service Request Status</h1>

      {mockRequests.length === 0 ? (
        <p className="text-gray-600">No requests submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {mockRequests.map((request) => (
            <div
              key={request.id}
              className="flex justify-between items-center p-4 bg-white border rounded shadow hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{request.type}</h2>
                <p className="text-sm text-gray-500">Module: {request.module}</p>
                <p className="text-sm text-gray-500">Submitted: {request.submitted}</p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-white font-semibold ${
                    request.status === "Pending" ? "bg-yellow-500" : "bg-green-500"
                  }`}
                >
                  {request.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServiceStatus;
