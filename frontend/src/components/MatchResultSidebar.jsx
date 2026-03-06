import { useNavigate } from 'react-router-dom';
export default function MatchResultSidebar() {
  const Navigate = useNavigate();
  return (
    <div className="w-64 bg-white  flex flex-col justify-between p-6">
      <div>
        <h1 className="text-lg font-bold text-indigo-600 mb-8">
          MatchAI
        </h1>

        <nav className="space-y-3 text-gray-600">
          <button className="block w-full text-left px-4 py-2 bg-indigo-600 text-white rounded-lg">
            Dashboard
          </button>

          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Upload Resume
          </button>

          <button
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Jobs
          </button>

          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Profile
          </button>
        </nav>
      </div>

      <div className="bg-indigo-50 p-4 rounded-lg text-sm text-indigo-700">
        <p className="font-semibold mb-1">PRO TIP</p>
        <p>
          Update your skills every 30 days to stay relevant to the AI matching engine.
        </p>
      </div>
    </div>
  );
}