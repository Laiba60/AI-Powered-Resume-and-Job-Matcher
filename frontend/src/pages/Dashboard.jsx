import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FiltersBar from "../components/FiltersBar";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

export default function Dashboard() {
  const jobs = [
    {
      initials: "ST",
      title: "Senior Product Designer",
      company: "Stripe",
      location: "Remote, US",
      type: "FULL-TIME",
      skills: ["Figma", "Prototyping", "React", "+2 skills"],
      experience: "5-8 yrs",
      salary: "$140k - $190k",
      score: 94,
    },
    {
      initials: "VE",
      title: "Lead Full Stack Engineer",
      company: "Vercel",
      location: "San Francisco, CA",
      type: "HYBRID",
      skills: ["Next.js", "TypeScript", "PostgreSQL"],
      experience: "8+ yrs",
      salary: "$180k - $240k",
      score: 82,
    },
    {
      initials: "AI",
      title: "Frontend Architect",
      company: "Anthropic",
      location: "San Francisco, CA",
      type: "FULL-TIME",
      skills: ["Tailwind", "Vue 3", "E2E Testing"],
      experience: "6+ yrs",
      salary: "$160k - $210k",
      score: 71,
    },
    {
      initials: "FA",
      title: "Product Designer II",
      company: "Fast",
      location: "Remote",
      type: "FULL-TIME",
      skills: ["Figma", "User Research", "Motion"],
      experience: "2-4 yrs",
      salary: "$110k - $145k",
      score: 85,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-6">
          <FiltersBar />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
}