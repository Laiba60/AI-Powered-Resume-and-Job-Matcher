import React from "react";

export default function TopSkills() {
  const skills = ["Cloud Infrastructure", "Kubernetes", "React.js", "Python", "Team Leadership"];
  const otherSkills = ["PostgreSQL", "AWS/GCP", "CI/CD Pipelines"];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-gray-700 font-semibold">Top Skills</h2>
        <button className="text-blue-500 text-sm">Edit</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
        {otherSkills.map((skill) => (
          <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">+4 more</span>
      </div>
    </div>
  );
}