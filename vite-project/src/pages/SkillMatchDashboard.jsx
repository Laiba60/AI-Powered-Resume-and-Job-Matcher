import React from "react";

// Sidebar
const Sidebar = () => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f6fb] flex flex-col justify-between p-5">
      <div>
        <div className="mb-10">
          <h1 className="text-[#3b82f6] font-bold text-lg">SkillMatch AI</h1>
          <p className="text-xs text-gray-400">Architectural Intelligence</p>
        </div>

        <nav className="space-y-2">
          {[
            { name: "Dashboard", active: true },
            { name: "Jobs" },
            { name: "Profile" },
            { name: "Upload" },
            { name: "Job Management" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer ${
                item.active
                  ? "bg-white text-[#3b82f6] shadow"
                  : "text-gray-500 hover:text-[#3b82f6]"
              }`}
            >
              <span className="material-symbols-outlined text-lg">
                dashboard
              </span>
              {item.name}
            </div>
          ))}
        </nav>
      </div>

      <div>
        <button className="w-full bg-[#3b82f6] text-white py-2 rounded-lg text-sm font-medium mb-4">
          Upgrade to Pro
        </button>
        <div className="text-xs text-gray-400 space-y-2">
          <p>Help Center</p>
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
};

// Header
const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      <h2 className="text-[#3b82f6] font-bold text-xl">SkillMatch AI</h2>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search insights..."
          className="bg-[#f1f5f9] px-4 py-2 rounded-full text-sm w-64"
        />
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined">settings</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

// Upload Section
const UploadSection = () => {
  return (
    <div className="bg-[#f8fafc] border-2 border-dashed rounded-xl p-10 text-center">
      <div className="mb-4">
        <span className="material-symbols-outlined text-4xl text-[#3b82f6]">
          cloud_upload
        </span>
      </div>
      <h3 className="text-lg font-semibold">Upload Your Resume</h3>
      <p className="text-gray-400 text-sm mt-1">
        Drag and drop PDF or DOCX files to re-sync your skills
      </p>

      <div className="flex justify-center gap-2 mt-4">
        <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          AI PARSING ENABLED
        </span>
        <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          SECURE ENCRYPTION
        </span>
      </div>
    </div>
  );
};

// Skills Card
const SkillsCard = () => {
  return (
    <div className="bg-[#0f172a] text-white p-6 rounded-xl">
      <h3 className="font-semibold mb-4">Active Skills</h3>

      <div className="flex flex-wrap gap-2">
        {[
          "Cloud Architecture",
          "Python (Expert)",
          "Neural Networks",
          "Strategic Planning",
          "K8s",
        ].map((skill, i) => (
          <span
            key={i}
            className="bg-blue-600 text-xs px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-6">Last Sync: Today, 10:42 AM</p>
      <p className="text-blue-400 text-sm mt-2 cursor-pointer">
        Manage Profile →
      </p>
    </div>
  );
};

// Job Card
const JobCard = ({ title, company, salary, match }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between mb-4">
        <span className="text-xs text-blue-600 font-semibold">
          {match}% MATCH
        </span>
      </div>

      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{company}</p>

      <div className="flex justify-between items-center mt-6">
        <p className="font-semibold">{salary}</p>
        <button className="bg-blue-600 text-white w-8 h-8 rounded-full">
          +
        </button>
      </div>
    </div>
  );
};

// Dashboard Page
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full bg-[#f8fafc] min-h-screen">
        <Header />

        <div className="p-10">
          {/* Top Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, Marcus.
              </h1>
              <p className="text-gray-400 mt-1">
                Your AI profile is 84% complete. Refine your expertise to
                unlock high-precision executive matches.
              </p>
            </div>

            <div className="bg-blue-50 px-6 py-4 rounded-xl">
              <p className="text-sm text-blue-600 font-semibold">
                84% MATCH STRENGTH
              </p>
              <p className="text-sm text-gray-500">
                Ready for Analysis
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-6 mb-10">
            <div className="col-span-8">
              <UploadSection />
            </div>

            <div className="col-span-4">
              <SkillsCard />
            </div>
          </div>

          {/* Jobs */}
          <div>
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-semibold">
                Top Intelligence Matches
              </h3>
              <span className="text-blue-600 text-sm cursor-pointer">
                View all vacancies
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <JobCard
                title="Senior AI Architect"
                company="DeepMind Solutions • London"
                salary="$180k - $240k"
                match={98}
              />

              <JobCard
                title="Principal Data Engineer"
                company="Nexus Tech • Remote"
                salary="$165k - $210k"
                match={92}
              />

              <JobCard
                title="Head of Infrastructure"
                company="CloudPioneer • Berlin"
                salary="$190k - $230k"
                match={89}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
