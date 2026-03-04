export default function Pagination() {
  return (
    <div className="flex justify-between items-center mt-8">
      <p className="text-sm text-gray-500">
        Showing 4 of 128 matches
      </p>

      <div className="flex space-x-2">
        <button className="px-3 py-1 border rounded-lg">Previous</button>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg">
          1
        </button>
        <button className="px-3 py-1 border rounded-lg">2</button>
        <button className="px-3 py-1 border rounded-lg">3</button>
        <button className="px-3 py-1 border rounded-lg">Next</button>
      </div>
    </div>
  );
}