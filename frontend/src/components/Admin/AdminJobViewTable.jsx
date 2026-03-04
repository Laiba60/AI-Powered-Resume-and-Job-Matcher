import { FaEdit, FaTrash } from "react-icons/fa";
import StatusBadge from "./StatusBadge";
import SkillBadge from "./SkillBadge";

export default function JobsTable() {
  const jobs = [
    {
      title: "Senior Frontend Engineer",
      company: "TechFlow Systems",
      applicants: 124,
      status: "Active",
      skills: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Product Designer",
      company: "CreativeAI",
      applicants: 48,
      status: "Active",
      skills: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      title: "DevOps Engineer",
      company: "CloudScale",
      applicants: 92,
      status: "Closed",
      skills: ["AWS", "Docker", "K8s"],
    },
    {
      title: "Fullstack Developer",
      company: "NexGen",
      applicants: 215,
      status: "Active",
      skills: ["Node.js", "Vue", "PostgreSQL"],
    },
  ];

  return (
    <div className="bg-[#111C33] rounded-2xl p-6">
      <table className="w-full text-sm">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="text-left py-3">Position Title</th>
            <th className="text-left">Company</th>
            <th className="text-left">Skills</th>
            <th className="text-left">Applicants</th>
            <th className="text-left">Status</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job, index) => (
            <tr
              key={index}
              className="border-b border-gray-800 hover:bg-[#1A2335]"
            >
              <td className="py-4">
                <p className="font-medium">{job.title}</p>
                <p className="text-xs text-gray-400">
                  Posted 2 days ago
                </p>
              </td>

              <td>{job.company}</td>

              <td className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <SkillBadge key={i} skill={skill} />
                ))}
              </td>

              <td>{job.applicants}</td>

              <td>
                <StatusBadge status={job.status} />
              </td>

              <td className="flex gap-4 text-gray-400">
                <FaEdit className="cursor-pointer hover:text-white" />
                <FaTrash className="cursor-pointer hover:text-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <p>Showing 1 to 4 of 24 results</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-[#1A2335] rounded-md">
            Previous
          </button>
          <button className="px-3 py-1 bg-indigo-600 rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}