// components/ActiveSkills.jsx
import React from "react";

const skills = [
  "Cloud Architecture",
  "Python (Expert)",
  "Neural Networks",
  "Strategic Planning",
  "K8s",
];

const ActiveSkills = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">Active Skills</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-500 px-3 py-1 text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-xs mt-4 text-gray-200">
        Last Sync: Today, 10:42 AM
      </p>

      <button className="mt-3 text-sm font-medium underline">
        Manage Profile →
      </button>
    </div>
  );
};

export default ActiveSkills;