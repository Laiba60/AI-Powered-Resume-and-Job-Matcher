export default function SkillDemandCard() {
  const skills = ["Python", "React", "SQL", "AWS", "Node", "Java", "Go"];

  return (
    <div className="bg-[#111C33] p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Skill Demand</h3>
        <span className="text-xs bg-indigo-600 px-3 py-1 rounded-lg">
          Quarterly Data
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-[#1A2335] px-3 py-1 rounded-full text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}