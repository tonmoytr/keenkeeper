import Image from "next/image";

export default function FriendCard({ friend }) {
  const statusColors = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-emerald-700 text-white",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center transition-all hover:shadow-md">
     
      <figure className="relative w-20 h-20 mb-4">
        <Image
          src={friend.picture}
          alt={friend.name}
          width={80}
          height={80}
          className="rounded-full object-cover border-2 border-slate-50"
          priority={false} 
        />
      </figure>

      <h3 className="text-xl font-bold text-slate-800">{friend.name}</h3>
      <p className="text-sm text-slate-400 mb-3">
        {friend.days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <span
        className={`px-4 py-1 rounded-full text-xs font-semibold capitalize ${statusColors[friend.status]}`}
      >
        {friend.status}
      </span>
    </div>
  );
}
