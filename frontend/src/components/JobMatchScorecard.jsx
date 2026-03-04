// MatchScoreCard.jsx
import React from "react";

const MatchScoreCard = () => {
  const matchedSkills = [
    "UI/UX Design",
    "Figma Expert",
    "Prototyping",
    "User Research",
    "Design Systems",
    "Typography",
    "Stakeholder Mgmt",
  ];

  const missingSkills = ["A/B Testing", "HTML/CSS", "Agile Lead"];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Senior Product Designer</h2>
          <p className="text-gray-500 text-sm">TechFlow Systems Inc.</p>
        </div>
        <span className="text-green-500 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
          Active Listing
        </span>
      </div>

      {/* Match Score */}
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              strokeWidth="4"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-indigo-600"
              strokeWidth="4"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              strokeDasharray="82, 100"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">82%</span>
            <span className="text-xs text-gray-500">MATCH SCORE</span>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Excellent Alignment! <br />
          Your profile is a strong match for this position. Refining a few key
          missing skills could increase your chances of landing an interview by
          45%.
        </p>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2 text-green-600">Matched Skills</h3>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.map((skill) => (
              <span
                key={skill}
                className="text-green-700 bg-green-100 px-2 py-1 text-xs rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-red-600">Missing Skills</h3>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill) => (
              <span
                key={skill}
                className="text-red-700 bg-red-100 px-2 py-1 text-xs rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
          Save Result
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-600">
          Improve Resume
        </button>
      </div>

      <p className="text-xs text-gray-400">Scan ID: #AI-992-XJ</p>
    </div>
  );
};

export default MatchScoreCard;