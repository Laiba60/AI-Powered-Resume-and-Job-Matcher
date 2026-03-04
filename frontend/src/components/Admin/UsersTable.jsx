import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function UsersTable() {
  const users = [
    {
      initials: "JD",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      resume: "resume_v2.pdf",
      role: "ADMIN",
      status: "Active",
    },
    {
      initials: "MK",
      name: "Mark Kaswell",
      email: "m.kaswell@techcorp.com",
      resume: "portfolio_main.pdf",
      role: "USER",
      status: "Active",
    },
    {
      initials: "SW",
      name: "Sarah Wilson",
      email: "sarah.w@hrsol.net",
      resume: null,
      role: "USER",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-[#111C33] rounded-2xl p-6">
      {/* Search + Filter */}
      <div className="flex justify-between mb-6">
        <input
          type="text"
          placeholder="Search by name, email or role..."
          className="bg-[#1A2335] px-4 py-2 rounded-lg text-sm w-80 outline-none"
        />

        <button className="bg-[#1A2335] px-4 py-2 rounded-lg text-sm text-gray-300">
          Role: All
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="text-left py-3">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Resume</th>
            <th className="text-left">Role</th>
            <th className="text-left">Status</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="border-b border-gray-800 hover:bg-[#1A2335]"
            >
              <td className="py-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-600 flex items-center justify-center rounded-full text-xs">
                  {user.initials}
                </div>
                {user.name}
              </td>

              <td>{user.email}</td>

              <td>
                {user.resume ? (
                  <span className="text-indigo-400 cursor-pointer">
                    {user.resume}
                  </span>
                ) : (
                  <span className="text-gray-500">
                    No resume uploaded
                  </span>
                )}
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    user.role === "ADMIN"
                      ? "bg-indigo-600"
                      : "bg-gray-700"
                  }`}
                >
                  {user.role}
                </span>
              </td>

              <td>
                <span
                  className={`flex items-center gap-2 text-xs ${
                    user.status === "Active"
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      user.status === "Active"
                        ? "bg-green-400"
                        : "bg-gray-400"
                    }`}
                  ></span>
                  {user.status}
                </span>
              </td>

              <td className="flex gap-4 text-gray-400">
                <FaEye className="cursor-pointer hover:text-white" />
                <FaEdit className="cursor-pointer hover:text-white" />
                <FaTrash className="cursor-pointer hover:text-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
        <p>Showing 1 to 3 of 42 users</p>

        <div className="flex gap-2">
          <button className="px-3 py-1 bg-indigo-600 rounded-md">1</button>
          <button className="px-3 py-1 bg-[#1A2335] rounded-md">2</button>
          <button className="px-3 py-1 bg-[#1A2335] rounded-md">3</button>
        </div>
      </div>
    </div>
  );
}