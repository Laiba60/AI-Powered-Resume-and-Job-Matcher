import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
  return (
    <div className="bg-white  px-6 py-4 flex justify-between items-center">
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by job title, keywords or company..."
        className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:border-indigo-500 transition"
      />

      {/* Right Side Icons */}
      <div className="flex items-center space-x-6">
        

        {/* Profile Avatar */}
        <button className="text-gray-500 hover:text-indigo-600 transition text-4xl">
          <FaUserCircle />
        </button>

      </div>
    </div>
  );
}