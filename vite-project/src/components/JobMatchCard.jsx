import React from "react";

export default function JobMatchCard() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 p-4 rounded-lg shadow-md text-white">
      <h2 className="font-semibold text-lg mb-2">Find Matching Jobs</h2>
      <p className="text-sm mb-3">
        Our AI has already found 12 positions that match your extracted profile.
      </p>
      <button className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
        Go to Job Board →
      </button>
    </div>
  );
}