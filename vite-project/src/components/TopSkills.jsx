import React from "react";

export default function TopSkills() {
  const skills = ["Cloud Infrastructure", "Kubernetes", "React.js", "Python", "Team Leadership"];
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Top Skills</h3>
        <button className="text-blue-500 text-sm">Edit</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}