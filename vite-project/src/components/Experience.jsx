import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior DevOps Engineer",
      company: "TechFlow Solutions",
      duration: "2021 — Present",
      description: "Led migration of 50+ microservices to EKS, reducing deployment time by 40%.",
    },
    {
      role: "Full Stack Developer",
      company: "CloudScale Inc",
      duration: "2018 — 2021",
      description: "Developed internal dashboard tools using React and Node.js.",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-gray-700 font-semibold">Experience</h2>
        <button className="text-blue-500 text-sm">Edit</button>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6">
            <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></div>
            <h3 className="font-semibold text-gray-800">{exp.role}</h3>
            <span className="text-gray-500 text-sm">{exp.company} • {exp.duration}</span>
            <p className="text-gray-600 mt-1 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}