// components/ResumeUpload.jsx
import React from "react";

const ResumeUpload = () => {
  return (
    <div className="border-2 border-dashed rounded-xl p-10 text-center bg-gray-50">
      <div className="mb-4 text-blue-500 text-3xl">☁️</div>

      <h3 className="text-lg font-semibold">Upload Your Resume</h3>
      <p className="text-gray-500 text-sm mt-1">
        Drag and drop PDF or DOCX files to re-sync your skills
      </p>

      <div className="flex justify-center gap-3 mt-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
          AI PARSING ENABLED
        </span>
        <span className="px-3 py-1 bg-gray-200 text-gray-600 text-xs rounded-full">
          SECURE ENCRYPTION
        </span>
      </div>
    </div>
  );
};

export default ResumeUpload;