export default function MatchResultStatsCard({ title, value, extra }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <p className="text-xs text-gray-500 uppercase mb-2">
        {title}
      </p>

      <div className="flex items-center space-x-2">
        <h3 className="text-xl font-semibold">
          {value}
        </h3>

        {extra && (
          <span className="text-green-500 font-bold">
            {extra}
          </span>
        )}
      </div>
    </div>
  );
}