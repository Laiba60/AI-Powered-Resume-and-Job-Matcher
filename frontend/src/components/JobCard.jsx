export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
      <div className="flex justify-between">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold">
            {job.initials}
          </div>

          <div>
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <p className="text-sm text-gray-500">
              {job.company} • {job.location}
            </p>
          </div>
        </div>

        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 flex justify-center items-center rounded-full">
          {job.type}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-2 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-500 mt-4">
        <span>{job.experience}</span>
        <span>{job.salary}</span>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1">
          <span>AI Match Score</span>
          <span>{job.score}%</span>
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${job.score}%` }}
          ></div>
        </div>
      </div>

      <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
        Apply Now
      </button>
    </div>
  );
}