import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
export default function ResumeUploadTopbar({ title }) {
  return (
    <div className="bg-white  px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="flex items-center space-x-6 text-gray-500">
        <button className="relative hover:text-indigo-600 transition text-xl">
          <IoMdNotificationsOutline />
        </button>

        <button className="text-xl hover:text-indigo-600">
          <FaUserCircle />
        </button>
      </div>
    </div>
  );
}