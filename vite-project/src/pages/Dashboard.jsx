import React from "react";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md flex flex-col justify-between p-4">
      <div>
        <h1 className="text-xl font-bold mb-6">SkillMatch AI</h1>
        <ul className="space-y-3">
          <li>Dashboard</li>
          <li>Jobs</li>
          <li>Profile</li>
          <li className="bg-blue-100 text-blue-600 p-2 rounded">Upload</li>
          <li>Job Management</li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-600 text-white p-3 rounded text-center">
          Upgrade Plan
        </div>
        <div className="text-gray-500 text-sm">Logout</div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Resume Analysis</h2>
      <div className="flex items-center gap-4">
        <input
          className="border rounded px-4 py-2 w-64"
          placeholder="Search insights..."
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
};

// Skills Component
const Skills = () => {
  const skills = [
    "Cloud Infrastructure",
    "Kubernetes",
    "React.js",
    "Python",
    "Team Leadership",
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-3">Top Skills</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Experience Component
const Experience = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-3">Experience</h4>
      <div className="space-y-3 text-sm">
        <div>
          <p className="font-medium">Senior DevOps Engineer</p>
          <p className="text-gray-500">TechFlow Solutions • 2021 - Present</p>
        </div>
        <div>
          <p className="font-medium">Full Stack Developer</p>
          <p className="text-gray-500">CloudScale Inc • 2018 - 2021</p>
        </div>
      </div>
    </div>
  );
};

// Education Component
const Education = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="font-semibold mb-3">Education</h4>
      <p className="text-sm font-medium">B.S Computer Science</p>
      <p className="text-gray-500 text-sm">University of Washington</p>

      <div className="mt-4">
        <h5 className="font-semibold text-sm mb-2">Certifications</h5>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>AWS Certified Solutions Architect</li>
          <li>Google Professional Cloud Dev</li>
        </ul>
      </div>
    </div>
  );
};

// Bottom Card
const BottomCard = () => {
  return (
    <div className="bg-blue-100 p-4 rounded shadow flex justify-between items-center">
      <div>
        <p className="font-medium">AI Persona Match</p>
        <p className="text-sm text-gray-500">Based on your experience</p>
      </div>
      <div className="bg-blue-600 text-white px-4 py-2 rounded">Confirm Data</div>
    </div>
  );
};

// Main Dashboard
export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <Header />

        {/* Analysis Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold">Analysis Complete</h3>
            <p className="text-gray-500">
              We've parsed your resume and generated insights.
            </p>
          </div>
          <div className="bg-white shadow p-4 rounded text-center">
            <p className="text-blue-600 font-bold text-xl">82%</p>
            <p className="text-sm text-gray-500">Match Strength</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            Source Document
          </div>

          <div className="col-span-2">
            <Skills />
          </div>

          <Experience />
          <Education />

          <div className="col-span-3">
            <BottomCard />
          </div>
        </div>
      </div>
    </div>
  );
}
