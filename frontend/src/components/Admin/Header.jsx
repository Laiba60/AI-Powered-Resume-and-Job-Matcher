import { FaUserCircle } from "react-icons/fa";
export default function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#0E1627] border-b border-gray-800">
      <input
        type="text"
        placeholder="Search data, users, jobs..."
        className="bg-[#1A2335] px-4 py-2 rounded-lg text-sm w-80 outline-none"
      />

      <div className="flex items-center text-4xl">
        <FaUserCircle />
        
      </div>
    </div>
  );
}