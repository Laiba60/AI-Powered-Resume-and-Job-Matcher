import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <h1 className="text-xl font-bold mb-6">SkillMatch AI</h1>

      <ul className="space-y-4">
        <li className="text-gray-600">Dashboard</li>
        <li onClick={() => navigate("/top-matches")} className="text-gray-600">
          Jobs
        </li>
        <li  onClick={() => navigate("/profile")} className="text-gray-600">
          Profile
        </li>
        <li  onClick={() => navigate("/skill-match")} className="bg-blue-500 text-white p-2 rounded">
          Upload
        </li>
      </ul>
    </div>
  );
}