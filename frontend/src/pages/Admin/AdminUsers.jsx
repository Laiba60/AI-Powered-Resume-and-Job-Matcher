import AdminSidebar from "../../components/Admin/Sidebar";
import AdminUsersHeader from "../../components/Admin/AdminUsersHeader";
import UsersTable from "../../components/Admin/UsersTable";

export default function AdminUsers() {
  return (
    <div className="flex h-screen bg-[#0B1220] text-white">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminUsersHeader />

        <div className="p-8 space-y-6 overflow-y-auto">
          {/* Page Title */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">User Management</h2>
              <p className="text-gray-400 text-sm">
                Manage system access and roles for all registered users.
              </p>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm font-medium">
              + Add User
            </button>
          </div>

          <UsersTable />
        </div>
      </div>
    </div>
  );
}