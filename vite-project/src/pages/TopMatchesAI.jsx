import React from "react";

const Sidebar = () => {
  const menu = ["Dashboard", "Jobs", "Profile", "Upload", "Job Management"];
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#eef2f7] p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-blue-500 font-bold text-lg mb-6">SkillMatch AI</h1>

        <div className="space-y-2">
          {menu.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm cursor-pointer ${
                item === "Jobs"
                  ? "bg-white text-blue-500 shadow"
                  : "text-gray-500 hover:text-blue-500"
              }`}
            >
              <span className="material-symbols-outlined">dashboard</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white border-b">
      <h2 className="font-semibold text-lg">Job Recommendations</h2>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search insights..."
          className="bg-gray-100 px-4 py-2 rounded-full text-sm w-64"
        />
        <span className="material-symbols-outlined">notifications</span>
        <span className="material-symbols-outlined">settings</span>
      </div>
    </div>
  );
};

const MatchCircle = ({ percent }) => {
  return (
    <div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center text-blue-500 font-bold">
      {percent}%
    </div>
  );
};

const JobCard = ({ title, company, match }) => {
  return (
    <div className="bg-[#f4f7fb] p-6 rounded-xl flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{company}</p>

        <div className="flex gap-2 mt-3 text-xs">
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
            UX/UI DESIGN
          </span>
          <span className="bg-gray-200 px-2 py-1 rounded">Prototyping</span>
          <span className="bg-red-100 text-red-500 px-2 py-1 rounded">
            Figma
          </span>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
            Apply Now
          </button>
          <button className="text-blue-500 text-sm">View Details</button>
        </div>
      </div>

      <MatchCircle percent={match} />
    </div>
  );
};

const TopMatchesAI = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full bg-white min-h-screen">
        <Header />

        <div className="p-10">
          <p className="text-xs text-blue-500 mb-2">
            FOR ALEXANDER PIERCE
          </p>

          <h1 className="text-2xl font-bold mb-2">Top AI Matches</h1>
          <p className="text-gray-500 text-sm mb-6 max-w-xl">
            Based on your resume expertise in UX design and frontend
            engineering, we’ve identified high-probability opportunities.
          </p>

          <div className="space-y-6">
            <JobCard
              title="Senior Product Designer"
              company="Lumino Systems • San Francisco"
              match={96}
            />

            <JobCard
              title="AI Interface Architect"
              company="NeuralCore • Austin"
              match={82}
            />

            <JobCard
              title="Creative Technologist"
              company="Archer Labs • London"
              match={69}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMatchesAI;