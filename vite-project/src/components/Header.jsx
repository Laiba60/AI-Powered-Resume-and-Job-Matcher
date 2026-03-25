export default function Header() {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow mb-6">

      {/* Left Side */}
      <h2 className="text-lg font-semibold">Resume Analysis</h2>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search insights..."
          className="px-3 py-2 border rounded-lg text-sm outline-none"
        />

        {/* Notification */}
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          🔔
        </div>

        {/* Profile */}
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
          U
        </div>

      </div>
    </div>
  );
}