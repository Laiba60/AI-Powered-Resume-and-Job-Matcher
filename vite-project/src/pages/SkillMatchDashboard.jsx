import React from "react";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-6">SkillMatch AI</h1>
        <ul className="space-y-3">
          <li className="text-blue-600 font-semibold">Dashboard</li>
          <li>Jobs</li>
          <li>Profile</li>
          <li>Upload</li>
          <li>Job Management</li>
        </ul>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-lg">Upgrade to Pro</button>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Welcome back, Marcus</h2>
      <input
        type="text"
        placeholder="Search insights..."
        className="border p-2 rounded-lg w-64"
      />
    </div>
  );
};

// Upload Card
const UploadCard = () => {
  return (
    <div className="border-2 border-dashed p-10 rounded-2xl text-center bg-gray-50">
      <p className="text-lg font-medium">Upload Your Resume</p>
      <p className="text-sm text-gray-500">Drag and drop PDF or DOCX files</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
        Upload
      </button>
    </div>
  );
};

// Skills Card
const SkillsCard = () => {
  const skills = ["Cloud Architecture", "Python", "Natural Networks", "Strategic Planning"];
  return (
    <div className="bg-blue-900 text-white p-6 rounded-2xl">
      <h3 className="font-semibold mb-4">Active Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="bg-blue-700 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Job Card
const JobCard = ({ title, company, salary }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{company}</p>
      <p className="mt-2 font-medium">{salary}</p>
    </div>
  );
};

// Main Dashboard
export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <Header />

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2">
            <UploadCard />
          </div>
          <SkillsCard />
        </div>

        <h3 className="text-xl font-semibold mb-4">Top Intelligence Matches</h3>
        <div className="grid grid-cols-3 gap-4">
          <JobCard
            title="Senior AI Architect"
            company="DeepMind"
            salary="$180K - $240K"
          />
          <JobCard
            title="Principal Data Engineer"
            company="Nexus Tech"
            salary="$165K - $210K"
          />
          <JobCard
            title="Head of Infrastructure"
            company="CloudPioneer"
            salary="$190K - $230K"
          />
        </div>
      </div>
    </div>
  );
}
