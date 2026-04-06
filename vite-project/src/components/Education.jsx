import React from "react";

export default function Education() {
  const education = {
    degree: "B.S. Computer Science",
    university: "University of Washington",
    gpa: "3.8 / 4.0",
    certifications: [
      { name: "AWS Certified Solutions Architect", year: "2023" },
      { name: "Google Professional Cloud Dev", year: "2022" },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Education</h3>
        <button className="text-blue-500 text-sm">✎ Edit</button>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">{education.degree}</h4>
        <p className="text-gray-500 text-sm">{education.university}</p>
        <p className="text-gray-500 text-sm">GPA: {education.gpa}</p>

        <div className="mt-2">
          <h5 className="font-medium text-sm mb-1">Certifications</h5>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            {education.certifications.map((cert, idx) => (
              <li key={idx}>
                {cert.name} • Issued {cert.year}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}