export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5">
      <h1 className="text-xl font-bold mb-6">SkillMatch AI</h1>

      <ul className="space-y-4">
        <li className="text-gray-600">Dashboard</li>
        <li className="text-gray-600">Jobs</li>
        <li className="text-gray-600">Profile</li>
        <li className="bg-blue-500 text-white p-2 rounded">
          Upload
        </li>
      </ul>
    </div>
  );
}