export default function AnalysisCard() {
  return (
    <div className="bg-white rounded-xl shadow-md px-8 py-6 flex justify-between items-center w-full mb-6">
      
      {/* Left */}
      <div className="max-w-[70%]">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Analysis Complete
        </h2>
        <p className="text-gray-500 text-sm">
          We've parsed your resume using our Architectural Intelligence engine.
          Below is a structured breakdown of your professional DNA.
        </p>
      </div>

      {/* Right */}
      <div className="bg-blue-50 px-5 py-4 rounded-xl flex flex-col items-center">
        <div className="w-14 h-14 rounded-full border-4 border-blue-500 flex items-center justify-center font-semibold text-blue-500 mb-1">
          82%
        </div>
        <p className="text-xs font-semibold text-gray-700 text-center">
          Senior Architect
        </p>
      </div>

    </div>
  );
}