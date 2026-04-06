import React from "react";
import {
  LayoutDashboard,
  Briefcase,
  User,
  Upload,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#F8FAFC] flex flex-col justify-between p-4">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-lg font-bold text-blue-600">SkillMatch AI</h1>
          <p className="text-xs text-gray-400 tracking-wide">
            ARCHITECTURAL INTELLIGENCE
          </p>
        </div>

        {/* Menu */}
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <LayoutDashboard size={18} /> Dashboard
          </li>

          <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Briefcase size={18} /> Jobs
          </li>

          <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <User size={18} /> Profile
          </li>

          {/* Active */}
          <li className="flex items-center gap-3 bg-blue-100 text-blue-600 p-2 rounded cursor-pointer">
            <Upload size={18} /> Upload
          </li>

          <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-2 rounded cursor-pointer">
            <Settings size={18} /> Job Management
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        
        {/* Upgrade Card */}
        <div className="bg-[#0F172A] text-white p-4 rounded-xl shadow">
          <p className="text-sm font-medium mb-2">Upgrade to Pro</p>
          <p className="text-xs mb-3 opacity-80">
            Unlock advanced AI analysis and direct job matching.
          </p>
          <button className="w-full bg-[#3B82F6] text-white text-sm py-1 rounded">
            Upgrade Now
          </button>
        </div>

        {/* Help */}
        <div className="flex items-center gap-2 text-gray-500 text-sm cursor-pointer">
          <HelpCircle size={16} /> Help Center
        </div>

        {/* Logout */}
        <div className="flex items-center gap-2 text-gray-500 text-sm cursor-pointer">
          <LogOut size={16} /> Logout
        </div>
      </div>
    </div>
  );
}