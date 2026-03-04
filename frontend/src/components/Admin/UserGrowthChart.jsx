export default function UserGrowthChart() {
  return (
    <div className="bg-[#111C33] p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-white">User Growth</h3>
        <span className="text-xs bg-[#1A2335] px-3 py-1 rounded-lg text-gray-300">
          Last 30 days
        </span>
      </div>

      <div className="h-56">
        <svg
          viewBox="0 0 400 150"
          className="w-full h-full"
          fill="none"
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Filled Area */}
          <path
            d="M0 120 Q80 40 160 90 T320 50 T400 30 L400 150 L0 150 Z"
            fill="url(#colorGradient)"
          />

          {/* Line */}
          <path
            d="M0 120 Q80 40 160 90 T320 50 T400 30"
            stroke="#6366F1"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}