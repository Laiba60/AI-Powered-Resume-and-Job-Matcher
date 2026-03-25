export default function EducationCard({ edu }) {
  return (
    <div className="border p-3 rounded-lg">
      <h3 className="font-semibold">{edu.degree}</h3>
      <p className="text-sm text-gray-500">{edu.university}</p>
    </div>
  );
}