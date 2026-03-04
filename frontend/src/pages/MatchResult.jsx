import Sidebar from "../components/MatchResultSidebar";
import Topbar from "../components/MatchResultTopbar";
import StatsCard from "../components/MatchResultStatsCard";
import JobRow from "../components/MatchResultJobrow";

export default function MatchResult() {
  const jobs = [
    {
      title: "Senior Product Designer",
      company: "Stripe",
      location: "Remote",
      skills: ["Figma", "UX Research", "Product Strategy"],
      match: 92,
    },
    {
      title: "Frontend Developer (React)",
      company: "Vercel",
      location: "Hybrid",
      skills: ["Next.js", "Tailwind CSS", "TypeScript"],
      match: 85,
    },
    {
      title: "Lead Growth Marketer",
      company: "Linear",
      location: "San Francisco",
      skills: ["SEO", "Analytics"],
      match: 65,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="p-8">

          {/* Welcome Section */}
          <h1 className="text-2xl font-semibold">
            Welcome, Laiba 👋
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Here’s your resume performance overview
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Resume Status"
              value="Uploaded"
              extra="✓"
            />
            <StatsCard
              title="Average Match Score"
              value="78%"
            />
            <StatsCard
              title="Total Jobs Matched"
              value="12 Jobs"
            />
          </div>

          {/* Recommended Jobs */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">
              Recommended Jobs
            </h2>
            <button className="text-indigo-600 text-sm">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <JobRow key={index} job={job} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}