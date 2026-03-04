import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export default function MatchResultTopbar() {
  return (
    <div className="bg-white  px-8 py-4 flex justify-end items-center space-x-6">

      <button className="text-gray-500 hover:text-indigo-600 text-xl">
        <IoMdNotificationsOutline />
      </button>

      <div className="flex items-center space-x-2">
        
        <FaUserCircle className="text-3xl text-gray-500" />
      </div>

    </div>
  );
}