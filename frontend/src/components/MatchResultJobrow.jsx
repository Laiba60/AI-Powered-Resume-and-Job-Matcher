import { useNavigate } from "react-router-dom";
export default function MatchResultJobRow({ job }) {
  const navigate=useNavigate()
  const getMatchColor = () => {
    if (job.match >= 85) return "bg-indigo-600";
    if (job.match >= 70) return "bg-blue-500";
    return "bg-orange-500";
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border flex justify-between items-center">

      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-green-900 rounded-lg"></div>

        <div>
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-500">
            {job.company} • {job.location}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-6">

        <div className="text-right">
          <p className="text-sm font-medium">
            {job.match}% Match
          </p>

          <div className="w-32 bg-gray-200 h-2 rounded-full mt-1">
            <div
              className={`${getMatchColor()} h-2 rounded-full`}
              style={{ width: `${job.match}%` }}
            ></div>
          </div>
        </div>

        <button onClick={()=>navigate("/recommend")} className="bg-indigo-600 hover:bg-indigo-700 
        text-white px-5 py-2 rounded-lg text-sm">
          Apply
        </button>

      </div>
    </div>
  );
}