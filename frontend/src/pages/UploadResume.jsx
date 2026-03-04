import Sidebar from "../components/Sidebar";
import Topbar from "../components/ResumeUploadTopbar";
import UploadCard from "../components/UploadCard";

export default function ResumeUpload() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar title="Resume Upload" />

        <div className="flex justify-center items-center flex-1 p-6">
          <UploadCard />
        </div>
      </div>
    </div>
  );
}