// components/MatchStrength.jsx
import React from "react";

const MatchStrength = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 flex items-center justify-center text-sm font-bold">
          84%
        </div>
        <div>
          <p className="text-xs text-gray-500">MATCH STRENGTH</p>
          <p className="font-semibold">Ready for Analysis</p>
        </div>
      </div>
    </div>
  );
};

export default MatchStrength;