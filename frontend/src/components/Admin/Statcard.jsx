export default function StatCard({ title, value, percent }) {
  return (
    <div className="bg-[#111C33] p-5 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-gray-400 text-sm">{title}</h4>
        <span className="text-green-400 text-xs bg-green-900/40 px-2 py-1 rounded-full">
          {percent}
        </span>
      </div>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}