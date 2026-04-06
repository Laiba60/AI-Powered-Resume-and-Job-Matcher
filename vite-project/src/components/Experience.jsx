import React from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior DevOps Engineer",
      company: "TechFlow Solutions",
      duration: "2021 — Present",
      description: "Led migration of 50+ microservices to EKS, reducing deployment time by 40%.",
    },
    {
      title: "Full Stack Developer",
      company: "CloudScale Inc",
      duration: "2018 — 2021",
      description: "Developed internal dashboard tools using React and Node.js.",
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Experience</h3>
        <button className="text-blue-500 text-sm">✎ Edit</button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-blue-500 pl-3 relative">
            <div className="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
            <h4 className="font-medium">{exp.title}</h4>
            <p className="text-gray-500 text-sm">{exp.company} • {exp.duration}</p>
            <p className="text-gray-700 text-sm mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}