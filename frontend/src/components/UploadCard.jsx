import UploadBox from "./UploadBox";
import PrivacyNote from "./PrivacyNote";

export default function UploadCard() {
  return (
    <div className="bg-white w-full max-w-2xl p-10 rounded-2xl shadow-sm border text-center">
      
      <h2 className="text-2xl font-semibold mb-2">
        Upload your Resume
      </h2>

      <p className="text-gray-500 text-sm mb-8">
        Our AI will scan your profile to find the best job matches for your skills.
      </p>

      <UploadBox />

      <button className="px-6 py-3  mt-6 bg-indigo-600 hover:bg-indigo-700 
      text-white  rounded-xl shadow-md transition">
        Upload and Continue
      </button>

      <PrivacyNote />

    </div>
  );
}