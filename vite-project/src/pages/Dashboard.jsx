import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AnalysisCard from "../components/AnalysisCard";


// Header Component


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

      <div className="flex-1 p-5 overflow-y-auto">
        <Topbar /> 

        {/* Analysis Header */}
        <AnalysisCard />

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
