import React from "react";

export default function AIPersonaMatch() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-gray-700 font-semibold mb-1">AI Persona Match</h2>
        <p className="text-gray-500 text-sm">Based on linguistic analysis of your experience.</p>
      </div>
      <div className="flex items-center space-x-2">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">LEAD</span>
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">SOLV</span>
        <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
          Confirm Data
        </button>
      </div>
    </div>
  );
}