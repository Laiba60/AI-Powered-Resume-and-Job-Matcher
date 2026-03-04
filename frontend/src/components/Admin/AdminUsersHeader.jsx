import { FaBell } from "react-icons/fa";

export default function AdminUsersHeader() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#0E1627] border-b border-gray-800">
      <h1 className="text-lg font-semibold">Users</h1>

      <div className="flex items-center gap-4">
        <FaBell className="text-gray-400 text-xl cursor-pointer" />

        <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm">
          + Add User
        </button>
      </div>
    </div>
  );
}