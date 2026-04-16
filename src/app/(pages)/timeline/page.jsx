"use client";

import { TimelineContext } from "@/lib/context/TimelineContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useContext } from "react";
import {
  HiOutlinePhone,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineVideoCamera,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const TimelinePage = () => {
  const { timelineData } = useContext(TimelineContext);

  // Icon mapping for different interaction types
  const iconMap = {
    Call: <HiOutlinePhone className="text-blue-500" size={24} />,
    Text: (
      <HiOutlineChatBubbleLeftEllipsis className="text-emerald-500" size={24} />
    ),
    Video: <HiOutlineVideoCamera className="text-purple-500" size={24} />,
    Meetup: <HiOutlineUserGroup className="text-orange-500" size={24} />,
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-left">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">
            Timeline
          </h1>
        </header>

        <div className="flex flex-col items-center">
          {timelineData.length === 0 ? (
            <main className="flex flex-col items-center justify-center py-10">
              <div className="w-full max-w-sm h-64 md:h-80 mx-auto">
                <DotLottieReact
                  src="/assets/animation/nothing.json"
                  loop
                  autoplay
                />
              </div>
              <h1 className="text-3xl font-bold text-[#1e293b] mt-6">
                No Interaction Yet....
              </h1>
              <p className="text-slate-500 mt-2">
                Make an interaction on a friend&apos;s profile to see it here!
              </p>
            </main>
          ) : (
            <div className="w-full flex flex-col gap-8 items-center">
              {timelineData.map((entry) => {
                return (
                  <div
                    key={entry.id}
                    className="w-full flex flex-col items-center"
                  >
                    {/* Activity Card */}
                    <div className="w-full bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-center gap-6 hover:shadow-md transition-all duration-300 group">
                      {/* Icon Circle */}
                      <div className="p-4 bg-slate-50 rounded-xl group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                        {iconMap[entry.type] || <HiOutlinePhone size={24} />}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-bold text-slate-800">
                            {entry.type}
                            <span className="font-medium text-slate-400 ml-2">
                              with{" "}
                              <span className="text-teal-800">
                                {entry.name}
                              </span>
                            </span>
                          </h4>
                        </div>
                        <p className="text-sm font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                          {entry.date}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
