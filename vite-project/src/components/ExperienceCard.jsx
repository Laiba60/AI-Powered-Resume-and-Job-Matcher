export default function ExperienceCard({ exp }) {
  return (
    <div className="border p-3 rounded-lg">
      <h3 className="font-semibold">{exp.title}</h3>
      <p className="text-sm text-gray-500">{exp.company}</p>
      <p className="text-xs">{exp.years}</p>
    </div>
  );
}