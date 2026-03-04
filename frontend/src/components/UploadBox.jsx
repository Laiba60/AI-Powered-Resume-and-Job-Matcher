import { FiUploadCloud } from "react-icons/fi";

export default function UploadBox() {
  return (
    <div className="border-2 border-dashed border-gray-300 
    rounded-xl p-10 flex flex-col items-center 
    hover:border-indigo-500 transition cursor-pointer">

      <div className="w-14 h-14 bg-indigo-50 text-indigo-600 
      rounded-full flex items-center justify-center text-2xl mb-4">
        <FiUploadCloud />
      </div>

      <p className="font-medium text-gray-700">
        Drag & Drop your Resume
      </p>

      <p className="text-sm text-gray-500 mt-1">
        or click to browse from your device
      </p>

      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full mt-4 text-gray-600">
        PDF, DOCX • Max size: 10MB
      </span>

      <input type="file" className="hidden" />
    </div>
  );
}