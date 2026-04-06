import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">SkillMatch AI</h1>
      <nav className="flex flex-col gap-3">
        <a href="#" className="px-3 py-2 rounded bg-blue-100 font-medium">Dashboard</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-100">Jobs</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-100">Profile</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-100">Upload</a>
        <a href="#" className="px-3 py-2 rounded hover:bg-gray-100">Job Management</a>
      </nav>

      <div className="mt-auto">
        <button className="w-full bg-blue-600 text-white py-2 rounded">Upgrade Now</button>
        <div className="mt-3 text-sm text-gray-500">
          <a href="#">Help Center</a> | <a href="#">Logout</a>
        </div>
      </div>
    </aside>
  );
}