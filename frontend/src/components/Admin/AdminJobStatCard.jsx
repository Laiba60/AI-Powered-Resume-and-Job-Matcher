export default function StatCard({ title, value, color = "indigo" }) {
  const colors = {
    indigo: "text-indigo-400",
    green: "text-green-400",
    orange: "text-orange-400",
    gray: "text-gray-400",
  };

  return (
    <div className="bg-[#111C33] p-6 rounded-2xl">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className={`text-2xl font-bold ${colors[color]}`}>
        {value}
      </h3>
    </div>
  );
}