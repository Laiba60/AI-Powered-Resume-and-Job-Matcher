import React from "react";

export default function JobMatch() {
  const matchedJobs = 12; // Example number

  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h3 className="font-semibold mb-2">Find Matching Jobs</h3>
      <p className="text-gray-500 mb-4">
        Our AI has already found <span className="font-bold">{matchedJobs}</span> positions that match your profile.
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go to Job Board →
      </button>
    </div>
  );
}