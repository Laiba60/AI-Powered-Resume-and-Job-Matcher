export default function FiltersBar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Available Jobs</h2>
        <p className="text-sm text-gray-500">
          Based on your AI Resume Profile
        </p>
      </div>

      <div className="flex space-x-3">
        <select className="px-3 py-2 border rounded-lg">
          <option>All Skills</option>
        </select>

        <select className="px-3 py-2 border rounded-lg">
          <option>Experience Level</option>
        </select>

        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Refresh Matches
        </button>
      </div>
    </div>
  );
}