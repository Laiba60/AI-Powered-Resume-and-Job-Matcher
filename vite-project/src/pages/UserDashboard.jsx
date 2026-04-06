import React from "react";

import WelcomeHeader from "../components/WelcomeHeader";
import ResumeUpload from "../components/ResumeUpload";
import MatchStrength from "../components/MatchStrength";
import ActiveSkillsCard from "../components/ActiveSkillsCard";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* ✅ SIDEBAR */}
      <Sidebar />

      {/* ✅ MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        
        {/* ✅ TOPBAR */}
        <Topbar />

        {/* ✅ PAGE CONTENT */}
        <div className="p-6 grid grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="col-span-2 space-y-6">
            <WelcomeHeader />
            <ResumeUpload />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <MatchStrength />
            <ActiveSkillsCard />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;