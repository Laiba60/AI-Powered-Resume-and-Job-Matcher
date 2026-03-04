import { useNavigate } from "react-router-dom";
export default function Sidebar() {
  const Navigate = useNavigate();
  return (
    <div className="w-64 bg-white  flex flex-col justify-between p-6">
      
      <div>
        <h1 className="text-xl font-bold text-indigo-600 mb-8">
          AI Matcher
        </h1>

        <nav className="space-y-3 text-gray-600">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Dashboard
          </button>

          <button className="block w-full text-left px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium">
            Upload Resume
          </button>

          <button onClick={()=>Navigate("/match-result")} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Job Matching
          </button>

          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Profile
          </button>
        </nav>
      </div>

      <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
        <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm">
          JD
        </div>
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <p className="text-xs text-gray-500">Free Plan</p>
        </div>
      </div>

    </div>
  );
}