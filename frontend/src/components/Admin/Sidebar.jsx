import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-[#0E1627] p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-8">AI Matcher</h2>

        <nav className="space-y-3">
          <SidebarItem label="Dashboard" onClick={() => navigate("/admin")} />
          <SidebarItem label="Users" onClick={() => navigate("/admin/users")} />
          <SidebarItem label="Jobs" onClick={() => navigate("/admin/jobs")} />
          <SidebarItem label="Add Job" onClick={() => navigate("/admin/jobs/add")} />
          <SidebarItem label="Analytics" />
        </nav>
      </div>
    </div>
  );
}

function SidebarItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 rounded-lg cursor-pointer text-sm ${
        active
          ? "bg-indigo-600 text-white"
          : "text-gray-400 hover:bg-[#1A2335]"
      }`}
    >
      {label}
    </div>
  );
}