import React, { useState } from "react";

const AddJob = () => {
  const [skills, setSkills] = useState(["React", "TypeScript"]);
  const [skillInput, setSkillInput] = useState("");

  const addSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="flex min-h-screen bg-[#0b0d1f] text-white">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-[#0e1029] border-r border-[#1e2147] p-6 flex-col justify-between">

        <div>
          <h2 className="text-lg font-bold mb-8">
            AI Matcher
            <span className="block text-xs text-gray-400">
              Admin Portal
            </span>
          </h2>

          <nav className="space-y-4">
            <a className="block text-gray-400 hover:text-white cursor-pointer">
              Dashboard
            </a>

            <a className="block text-indigo-400 font-semibold cursor-pointer">
              Jobs
            </a>

            <a className="block text-gray-400 hover:text-white cursor-pointer">
              Candidates
            </a>

            <a className="block text-gray-400 hover:text-white cursor-pointer">
              Analytics
            </a>
          </nav>
        </div>

        <div className="text-gray-400">
          <a className="cursor-pointer">Settings</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-lg sm:text-xl font-semibold">
            ← Add Job
          </h1>

          <div className="flex items-center gap-4">
            <span className="w-8 h-8 bg-gray-600 rounded-full"></span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-[#0e1029] border border-[#1e2147] rounded-xl p-6 md:p-8 max-w-4xl w-full mx-auto">

          <h2 className="text-lg md:text-xl font-semibold mb-1">
            Post a New Position
          </h2>

          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Fill in the details to find the best AI-matched candidates.
          </p>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Job Title */}
            <div>
              <label className="text-sm text-gray-400">
                Job Title
              </label>

              <input
                className="mt-2 w-full bg-[#0b0d1f] border border-[#1e2147] rounded-lg px-4 py-2 focus:outline-none"
                placeholder="e.g. Senior Software Engineer"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="text-sm text-gray-400">
                Required Skills
              </label>

              <div className="flex flex-wrap items-center gap-2 mt-2 bg-[#0b0d1f] border border-[#1e2147] rounded-lg p-2">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {skill}

                    <button
                      onClick={() => removeSkill(skill)}
                      className="text-xs"
                    >
                      ✕
                    </button>
                  </span>
                ))}

                <input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={addSkill}
                  className="bg-transparent outline-none text-sm flex-1 min-w-[120px]"
                  placeholder="Add skill..."
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="text-sm text-gray-400">
                Company
              </label>

              <input
                className="mt-2 w-full bg-[#0b0d1f] border border-[#1e2147] rounded-lg px-4 py-2"
                placeholder="e.g. TechCorp AI"
              />
            </div>

            {/* Salary */}
            <div>
              <label className="text-sm text-gray-400">
                Salary Range
              </label>

              <div className="flex flex-col sm:flex-row gap-2 mt-2">

                <input
                  className="w-full bg-[#0b0d1f] border border-[#1e2147] rounded-lg px-4 py-2"
                  placeholder="$ Min"
                />

                <input
                  className="w-full bg-[#0b0d1f] border border-[#1e2147] rounded-lg px-4 py-2"
                  placeholder="$ Max"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-400">
                Experience Required
              </label>

              <select className="mt-2 w-full bg-[#0b0d1f] border border-[#1e2147] rounded-lg px-4 py-2">
                <option>Entry Level (0-2 years)</option>
                <option>Mid Level (2-5 years)</option>
                <option>Senior (5+ years)</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="text-sm text-gray-400">
                Job Description
              </label>

              <textarea
                rows="5"
                className="mt-2 w-full bg-[#0b0d1f] border border-[#1e2147] rounded-lg px-4 py-3"
                placeholder="Describe the role, responsibilities, and requirements in detail..."
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-end gap-4 mt-6">

            <button className="text-gray-400 hover:text-white">
              Save Draft
            </button>

            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg">
              ▶ Publish Job
            </button>
          </div>
        </div>

        {/* AI Tip */}
        <div className="bg-[#0e1029] border border-[#1e2147] rounded-xl p-5 mt-6 max-w-4xl w-full mx-auto">

          <h3 className="text-indigo-400 font-semibold mb-1">
            AI Matcher Tip
          </h3>

          <p className="text-gray-400 text-sm">
            Our AI performs better when you provide specific technical
            skills. Avoid generic terms like "Good Communication"
            and focus on stack requirements like "Tailwind CSS"
            or "PostgreSQL".
          </p>

        </div>

      </main>
    </div>
  );
};

export default AddJob;