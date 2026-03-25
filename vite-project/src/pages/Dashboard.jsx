import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import SkillTag from "../components/SkillTag";
import ProgressCircle from "../components/ProgressCircle";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import Header from "../components/Header";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/resume/analyze")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!data) return <div className="p-10">Loading...</div>;

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">

        {/* ✅ Header Added */}
        <Header />

        <h2 className="text-2xl font-bold mb-6">Analysis Complete</h2>

        <div className="grid grid-cols-3 gap-6">

          {/* Resume Card */}
          <div className="bg-white p-4 rounded-xl shadow col-span-1">
            <h3 className="font-semibold">{data?.fileName}</h3>
            <p className="text-sm text-gray-500">Uploaded Resume</p>
          </div>

          {/* Skills */}
          <div className="bg-white p-4 rounded-xl shadow col-span-2">
            <h3 className="font-semibold mb-3">Top Skills</h3>

            <div className="flex flex-wrap gap-2">
              {data?.skills?.map((skill, i) => (
                <SkillTag key={i} skill={skill} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white p-4 rounded-xl shadow col-span-1">
            <h3 className="font-semibold mb-3">Experience</h3>

            {data?.experience?.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>

          {/* Education */}
          <div className="bg-white p-4 rounded-xl shadow col-span-1">
            <h3 className="font-semibold mb-3">Education</h3>

            {data?.education?.map((edu, i) => (
              <EducationCard key={i} edu={edu} />
            ))}
          </div>

          {/* Match Score */}
          <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center col-span-1">
            <h3 className="mb-3 font-semibold">Match Strength</h3>
            <ProgressCircle value={data?.matchScore || 0} />
          </div>

        </div>
      </div>
    </div>
  );
}