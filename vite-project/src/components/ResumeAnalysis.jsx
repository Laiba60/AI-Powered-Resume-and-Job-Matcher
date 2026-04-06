import React from "react";
import TopSkills from "./TopSkills";
import Experience from "./Experience";
import Education from "./Education";
import JobMatch from "./JobMatch";

export default function ResumeAnalysis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Source Document</h3>
          <p>Alex_Chen_CV_2024.pdf</p>
          <p className="text-sm text-gray-400">Uploaded 12 mins ago • 2.4 MB</p>
        </div>
        <JobMatch />
      </div>

      {/* Middle Column */}
      <div className="col-span-2 space-y-6">
        <div className="bg-white p-4 rounded shadow flex justify-between items-center">
          <h2 className="text-xl font-bold">Analysis Complete</h2>
          <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded">
            82% <br /> Senior Architect
          </div>
        </div>

        <TopSkills />
        <div className="grid grid-cols-2 gap-6">
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
}