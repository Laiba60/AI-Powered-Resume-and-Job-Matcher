export default function ProgressCircle({ value }) {
  return (
    <div className="flex items-center justify-center w-24 h-24 rounded-full border-8 border-blue-500">
      <span className="text-xl font-bold">{value}%</span>
    </div>
  );
}