"use client";

import { TimelineContext } from "@/lib/context/TimelineContext";
import { useContext } from "react";

const TimelinePage = () => {
  const { timelineData } = useContext(TimelineContext);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Interaction History</h1>
      <div className="space-y-4">
        {timelineData.length === 0 ? (
          <p>No interactions yet.</p>
        ) : (
          timelineData.map((entry) => (
            <div
              key={entry.id}
              className="p-4 border rounded-lg bg-white shadow-sm"
            >
              <p className="font-bold text-slate-800">{entry.title}</p>
              <p className="text-sm text-gray-500">{entry.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
