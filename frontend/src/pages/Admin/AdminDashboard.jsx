import Sidebar from "../../components/Admin/Sidebar";
import Header from "../../components/Admin/Header";
import StatCard from "../../components/Admin/Statcard";
import UserGrowthChart from "../../components/Admin/UserGrowthChart";
import SkillDemandCard from "../../components/Admin/SkillDemandCard";
import RecentMatchesTable from "../../components/Admin/RecentMatchestable";
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const Navigate = useNavigate();
  return (
    <div className="flex h-screen bg-[#0B1220] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Title + Button */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Platform Overview</h1>
              <p className="text-gray-400 text-sm">
                Real-time insights and matching performance analytics.
              </p>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm font-medium">
              Export Report
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">
            <StatCard title="Total Users" value="1,284" percent="+12%" />
            <StatCard title="Total Jobs" value="456" percent="+5%" />
            <StatCard title="Resumes Uploaded" value="3,492" percent="+18%" />
            <StatCard title="Avg Match Score" value="76%" percent="+2%" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            <UserGrowthChart />
            <SkillDemandCard />
          </div>

          {/* Table */}
          <RecentMatchesTable />
        </div>
      </div>
    </div>
  );
}