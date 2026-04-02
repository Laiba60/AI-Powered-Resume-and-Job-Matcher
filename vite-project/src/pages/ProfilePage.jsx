import React from "react";
import Sidebar from "../components/Sidebar";

// Sidebar


// Header
const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white border-b">
      <h2 className="text-blue-500 font-semibold text-lg">
        Profile Management
      </h2>

      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-2 text-gray-400">
            search
          </span>
          <input
            placeholder="Search insights..."
            className="bg-gray-100 pl-10 pr-4 py-2 rounded-full text-sm w-64 outline-none"
          />
        </div>

        <span className="material-symbols-outlined cursor-pointer">
          notifications
        </span>
        <span className="material-symbols-outlined cursor-pointer">
          settings
        </span>

        <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
      </div>
    </div>
  );
};

// Profile Hero Card
const ProfileCard = () => {
  return (
    <div className="bg-[#0f2a4d] text-white rounded-2xl p-8 flex justify-between items-center shadow-lg">
      <div>
        <span className="text-xs bg-blue-500 px-3 py-1 rounded-full">
          CANDIDATE PROFILE
        </span>

        <h1 className="text-3xl font-bold mt-4">
          Alex Sterling
        </h1>

        <p className="text-sm text-gray-300 mt-2 max-w-md">
          Senior Product Designer specializing in AI-driven
          interface ecosystems and data visualization.
        </p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-sm font-medium shadow">
        Save Changes
      </button>
    </div>
  );
};

// Input Field Component
const InputField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="bg-gray-100 px-4 py-2 rounded-lg text-sm outline-none"
      />
    </div>
  );
};

// Personal Info Card
const PersonalInfo = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">
        Personal Information
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <InputField label="Full Name" placeholder="Alex Sterling" />
        <InputField label="Email" placeholder="alex@email.com" />
        <InputField label="Phone" placeholder="+123456789" />
        <InputField label="Location" placeholder="New York, USA" />
      </div>
    </div>
  );
};

// Skills Card
const SkillsCard = () => {
  const skills = [
    "UI/UX Design",
    "Figma",
    "Prototyping",
    "Design Systems",
    "AI UX",
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">
        Skills & Expertise
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Settings Panel (RIGHT SIDE)
const SettingsPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
      <h3 className="font-semibold text-lg">Settings</h3>

      <div className="space-y-4 text-sm">
        {[
          "Email Notifications",
          "Job Alerts",
          "Dark Mode",
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center">
            <span>{item}</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={i!==2} />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 relative">
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>
        ))}
      </div>

      <hr />

      <div className="space-y-3 text-sm">
        <h4 className="font-medium">Privacy</h4>

        <div className="flex justify-between items-center">
          <span>Profile Visibility</span>
          <select className="bg-gray-100 px-3 py-1 rounded-md text-sm">
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span>Data Sharing</span>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">
        Save Settings
      </button>
    </div>
  );
};

// Experience Card
const ExperienceCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold mb-4">
        Experience
      </h3>

      <div className="space-y-4 text-sm text-gray-600">
        <p>
          <strong>Senior Product Designer</strong> — Lumino Systems
        </p>
        <p>
          <strong>UX Designer</strong> — Creative Labs
        </p>
      </div>
    </div>
  );
};

// Main Page
const ProfilePage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full min-h-screen bg-[#f8fafc]">
        <Header />

        <div className="p-10 space-y-8">
          <ProfileCard />

          {/* UPDATED GRID WITH SETTINGS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <PersonalInfo />
              <SkillsCard />
            </div>

            <SettingsPanel />
          </div>

          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;