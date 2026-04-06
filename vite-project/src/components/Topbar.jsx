import React from "react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <input
        type="text"
        placeholder="Search insights..."
        className="border rounded px-3 py-2 w-1/3"
      />
      <div className="flex items-center gap-4">
        <button className="text-gray-500">🔔</button>
        <button className="text-gray-500">⚙️</button>
        <img src="/profile.png" alt="profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}