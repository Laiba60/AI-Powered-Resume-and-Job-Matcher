import React from "react";

export default function Education() {
  const certifications = [
    { name: "AWS Certified Solutions Architect", year: 2023 },
    { name: "Google Professional Cloud Dev", year: 2022 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-gray-700 font-semibold">Education</h2>
        <button className="text-blue-500 text-sm">Edit</button>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">B.S. Computer Science</h3>
        <span className="text-gray-500 text-sm">University of Washington • GPA: 3.8 / 4.0</span>
      </div>
      <div className="mt-3">
        <h4 className="font-semibold text-gray-700 mb-1">Certifications</h4>
        <ul className="space-y-1">
          {certifications.map((cert, index) => (
            <li key={index} className="text-gray-600 text-sm">
              {cert.name} • Issued {cert.year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}