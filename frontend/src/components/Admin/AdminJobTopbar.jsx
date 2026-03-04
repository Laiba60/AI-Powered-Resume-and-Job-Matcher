import { FaBell } from "react-icons/fa";

export default function AdminJobTopbar({ title }) {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#0E1627] border-b border-gray-800">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold">{title}</h1>

        <input
          type="text"
          placeholder="Search positions..."
          className="bg-[#1A2335] px-4 py-2 rounded-lg text-sm w-80 outline-none"
        />
      </div>

      <FaBell className="text-gray-400 text-xl cursor-pointer" />
    </div>
  );
}