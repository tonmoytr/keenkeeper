"use client";

import React, { useContext, useMemo } from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { TimelineContext } from "@/lib/context/TimelineContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const StatsPage = () => {
  const { timelineData } = useContext(TimelineContext);

  const chartData = useMemo(() => {
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

    timelineData.forEach((entry) => {
      if (counts[entry.type] !== undefined) {
        counts[entry.type]++;
      }
    });

    return [
      { name: "Call", value: counts.Call, fill: "#075234" },
      { name: "Text", value: counts.Text, fill: "#8b5cf6" },
      { name: "Video", value: counts.Video, fill: "#10b981" },
    ];
  }, [timelineData]);

  // Check if there is data to display
  const hasData = timelineData.length > 0;

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-100 p-12 shadow-sm">
        <header className="mb-10">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">
            Friendship Analytics
          </h1>
        </header>

        <div className="bg-white border border-slate-50 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-slate-600 mb-8">
            By Interaction Type
          </h3>

          {!hasData ? (
            <main className="flex flex-col  items-center justify-center py-10">
              <div className="w-full max-w-sm h-64 md:h-80 mx-auto">
                <DotLottieReact
                  src="/assets/animation/nothing.json"
                  loop
                  autoplay
                />
              </div>
              <h1 className="text-3xl font-bold text-[#1e293b] mt-6">
                Nothing to Analyze here.......
              </h1>
              <p className="text-slate-500 mt-2">
                Interact with a friend&apos;s profile to see stats here!
              </p>
            </main>
          ) : (
            <div className="flex flex-col items-center">
              {/* Chart Container */}
              <div className="w-full max-w-[400px] aspect-square">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      innerRadius="80%"
                      outerRadius="100%"
                      cornerRadius={40}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                      isAnimationActive={true}
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Custom Legend to match Figma */}
              <div className="flex gap-8 mt-10">
                {chartData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span className="text-sm font-bold text-slate-500">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
