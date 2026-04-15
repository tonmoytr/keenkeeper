// components/StatsSection.js

import { getFriends } from "@/lib/utils/getFriends";

export default async function StatsSection() {
  const friends = await getFriends();

  // Dynamic calculations
  const totalFriends = friends.length;
  const onTrack = friends.filter((f) => f.status === "on-track").length;
  const needAttention = friends.filter(
    (f) => f.status === "overdue" || f.status === "almost due",
  ).length;

  // Custom logic for interactions (example)
  const interactions = friends.reduce(
    (acc, curr) => acc + (curr.days_since_contact < 7 ? 1 : 0),
    0,
  );

  const stats = [
    { label: "Total Friends", value: totalFriends },
    { label: "On Track", value: onTrack },
    { label: "Need Attention", value: needAttention },
    { label: "Interactions Recently", value: interactions },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-10 -mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center"
          >
            <span className="text-4xl font-bold text-[#1e293b] mb-2">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
