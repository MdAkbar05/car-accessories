export default function StatsCard({ value, name, stat }) {
  return (
    <div className="bg-[#151E2E] p-5 rounded-xl border border-[#1E293B] shadow-sm hover:shadow-lg transition-all">
      <h3 className="text-sm uppercase text-gray-400 tracking-wide">{name}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p
        className={`text-sm mt-1 ${
          stat.change.startsWith("+") ? "text-green-400" : "text-red-400"
        }`}
      >
        {stat.change} from last week
      </p>
    </div>
  );
}
