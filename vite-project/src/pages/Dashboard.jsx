import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AnalysisCard from "../components/AnalysisCard";

// Import the components from the previous design
import SourceDocument from "../components/SourceDocument";
import TopSkills from "../components/TopSkills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import AIPersonaMatch from "../components/AIPersonaMatch";
import JobMatchCard from "../components/JobMatchCard";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        {/* Topbar */}
        <Topbar />

        {/* Analysis Card */}
        <AnalysisCard />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left Section */}
          <div className="space-y-6">
            <SourceDocument />
            <JobMatchCard />
          </div>

          {/* Right Section */}
          <div className="md:col-span-2 space-y-6">
            <TopSkills />
            <Experience />
            <Education />
            <AIPersonaMatch />
          </div>
        </div>
      </div>
    </div>
  );
}