import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ResumeAnalysis from "./components/ResumeAnalysis";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Resume Analysis Section */}
        <div className="p-6 overflow-auto">
          <ResumeAnalysis />
        </div>
      </div>
    </div>
  );
}