// components/TopIntelligenceMatches.jsx
import React from "react";
import { Plus } from "lucide-react";

const jobs = [
  {
    id: 1,
    match: "98%",
    title: "Senior AI Architect",
    company: "DeepMind Solutions",
    location: "London",
    salary: "$180k - $240k",
    icon: "💻",
  },
  {
    id: 2,
    match: "92%",
    title: "Principal Data Engineer",
    company: "Nexus Tech",
    location: "Remote",
    salary: "$165k - $210k",
    icon: "📊",
  },
  {
    id: 3,
    match: "89%",
    title: "Head of Infrastructure",
    company: "CloudPioneer",
    location: "Berlin",
    salary: "$190k - $230k",
    icon: "☁️",
  },
  {
    id: 4,
    match: "87%",
    title: "AI Product Lead",
    company: "OpenAI Labs",
    location: "San Francisco",
    salary: "$170k - $220k",
    icon: "🤖",
  },
  {
    id: 5,
    match: "85%",
    title: "ML Ops Engineer",
    company: "DataCore",
    location: "Remote",
    salary: "$150k - $200k",
    icon: "⚙️",
  },
  {
    id: 6,
    match: "83%",
    title: "Cloud Security Architect",
    company: "SecureNet",
    location: "New York",
    salary: "$160k - $210k",
    icon: "🔐",
  },
];

const TopIntelligenceMatches = () => {
  return (
    <div className="mt-4 ">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Top Intelligence Matches
        </h2>

        <button className="text-sm text-blue-600 font-medium hover:underline">
          View all vacancies
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition duration-200"
          >
            {/* Top Section */}
            <div className="flex justify-between items-center mb-4">
              
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg text-lg">
                {job.icon}
              </div>

              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-semibold">
                {job.match} MATCH
              </span>
            </div>

            {/* Job Title */}
            <h3 className="text-sm font-semibold text-gray-800 leading-snug">
              {job.title}
            </h3>

            {/* Company Info */}
            <p className="text-xs text-gray-500 mt-1">
              {job.company} • {job.location}
            </p>

            {/* Bottom Section */}
            <div className="flex justify-between items-center mt-5">
              <p className="text-sm font-semibold text-gray-800">
                {job.salary}
              </p>

              <button className="w-9 h-9 flex items-center justify-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TopIntelligenceMatches;