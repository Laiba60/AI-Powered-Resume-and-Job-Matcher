export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0E1627] p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-8">AI Matcher</h2>

        <nav className="space-y-3">
          <SidebarItem active label="Dashboard" />
          <SidebarItem label="Users" />
          <SidebarItem label="Jobs" />
          <SidebarItem label="Add Job" />
          <SidebarItem label="Analytics" />
        </nav>
      </div>

      <div className="bg-indigo-600 p-4 rounded-xl">
        <p className="text-sm mb-2">PRO PLAN</p>
        <button className="bg-white text-black w-full py-1 rounded-lg text-sm">
          Upgrade
        </button>
      </div>
    </div>
  );
}

function SidebarItem({ label, active }) {
  return (
    <div
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