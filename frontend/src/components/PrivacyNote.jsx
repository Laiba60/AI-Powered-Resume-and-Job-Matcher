import { FiInfo } from "react-icons/fi";

export default function PrivacyNote() {
  return (
    <div className="mt-6 bg-indigo-50 p-4 rounded-lg flex items-start space-x-3 text-sm text-indigo-700">
      <FiInfo className="mt-1" />

      <p>
        Privacy Tip: We use end-to-end encryption to process your documents. 
        Your personal data is only used for generating AI matching scores.
      </p>
    </div>
  );
}