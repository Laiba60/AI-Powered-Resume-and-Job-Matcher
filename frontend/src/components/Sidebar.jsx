export default function Sidebar() {
  return (
    <div className="w-64 bg-white  p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-8 text-indigo-600">
          AI MatchPoint
        </h1>

        <nav className="space-y-3">
          <button className="w-full text-left px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium">
            Browse Jobs
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            My Resumes
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Applications
          </button>

          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg">
            Match Insights
          </button>
        </nav>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-500">Current Plan</p>
        <p className="font-semibold">Pro Developer</p>
      </div>
    </div>
  );
}