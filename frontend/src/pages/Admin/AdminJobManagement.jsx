import Sidebar from "../../components/Admin/Sidebar";
import AdminJobTopbar from "../../components/Admin/AdminJobTopbar";
import StatCard from "../../components/Admin/Statcard";
import AdminJobViewTable from "../../components/Admin/AdminJobViewTable";

export default function JobsManagement() {
  return (
    <div className="flex h-screen bg-[#0B1220] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <AdminJobTopbar title="Jobs" />

        <div className="p-8 space-y-6 overflow-y-auto">
          {/* Title Section */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Jobs Management</h2>
              <p className="text-gray-400 text-sm">
                Create, edit and manage job listings and applicant tracking.
              </p>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl text-sm font-medium">
              + Add New Job
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">
            <StatCard title="Total Jobs" value="24" />
            <StatCard title="Active" value="18" color="green" />
            <StatCard title="Applicants" value="842" color="orange" />
            <StatCard title="Closed" value="6" color="gray" />
          </div>

          {/* Table */}
          <AdminJobViewTable />
        </div>
      </div>
    </div>
  );
}