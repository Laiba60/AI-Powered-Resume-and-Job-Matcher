import React from "react";
import { Search, Bell, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full bg-[#F8FAFC] px-5 flex items-center justify-between">
      
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 p-2 rounded">
          📊
        </div>
        <h2 className="text-lg font-semibold text-gray-800">
          Resume Analysis
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        
        {/* Search Box */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-72">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search insights..."
            className="bg-transparent outline-none text-sm ml-2 w-full"
          />
        </div>

        {/* Icons */}
        <Bell className="text-gray-500 cursor-pointer" size={18} />
        <Settings className="text-gray-500 cursor-pointer" size={18} />

        {/* Profile */}
        <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-sm font-medium">
          A
        </div>
      </div>
    </div>
  );
}