export default function RecentMatchesTable() {
  const data = [
    {
      name: "Jordan Smith",
      role: "Senior DevSecOps",
      score: "92%",
      status: "Shortlisted",
    },
    {
      name: "Sarah Connor",
      role: "AI Researcher",
      score: "78%",
      status: "Pending",
    },
    {
      name: "Robert Vance",
      role: "Product Manager",
      score: "45%",
      status: "Rejected",
    },
  ];

  return (
    <div className="bg-[#111C33] p-6 rounded-2xl">
      <h3 className="font-semibold mb-4">Recent Match History</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="text-left py-2">Candidate</th>
            <th className="text-left py-2">Job Role</th>
            <th className="text-left py-2">Match Score</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b border-gray-800">
              <td className="py-3">{item.name}</td>
              <td>{item.role}</td>
              <td className="text-green-400">{item.score}</td>
              <td>
                <span className="px-3 py-1 rounded-full text-xs bg-indigo-600">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}