import React from "react";

export default function SourceDocument() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-gray-700 font-semibold mb-2">SOURCE DOCUMENT</h2>
      <div className="border rounded p-3 flex flex-col space-y-2">
        <span className="font-medium text-gray-800">Alex_Chen_CV_2024.pdf</span>
        <span className="text-gray-400 text-sm">Uploaded 12 mins ago • 2.4 MB</span>
      </div>
      <p className="text-gray-500 mt-3 text-sm">
        "Extracted summary: Highly skilled professional with 8+ years in cloud
        infrastructure and team leadership. Proven track record in scaling fintech
        solutions..."
      </p>
    </div>
  );
}