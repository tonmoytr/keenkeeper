"use client";

import { TimelineContext } from "@/lib/context/TimelineContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useContext, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
import {
  HiOutlinePhone,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineVideoCamera,
  HiOutlineUserGroup,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";

const TimelinePage = () => {
  const { timelineData } = useContext(TimelineContext);

  const [filterType, setFilterType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredTimelineData = timelineData
    .filter((entry) => {
      const isMatch = filterType === "All" || entry.type === filterType;
      const searchValue = entry.name
        .toLowerCase()
        .includes(searchQuery.toLocaleLowerCase());
      return isMatch && searchValue;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    });

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
          {timelineData.length > 0 && (
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
              {/* Left: Type Filter Dropdown */}
              <div className="relative w-full md:w-80 flex items-center gap-4">
                <div className="dropdown dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn m-1 bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  >
                    {/* IMPROVEMENT: Show the current filter name */}
                    {filterType === "All"
                      ? "Filter Timeline"
                      : `Show: ${filterType}`}
                    <div className="ps-6 text-slate-600">
                      <RiArrowDownWideFill size={20} />
                    </div>
                  </div>

                  <ul
                    tabIndex={0} // Changed from -1 to 0 so it stays focusable
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm border border-slate-100"
                  >
                    {/* FIXED: Using onClick to update the state */}
                    <li>
                      <button onClick={() => setFilterType("All")}>
                        All Interactions
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setFilterType("Call")}>
                        Call
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setFilterType("Text")}>
                        Text
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setFilterType("Video")}>
                        Video
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() =>
                    setSortOrder(sortOrder === "newest" ? "oldest" : "newest")
                  }
                  className="btn m-1 bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                >
                  {sortOrder === "newest" ? "Latest" : "Oldest"}{" "}
                  <FaArrowDownUpAcrossLine  className="text-slate-600 ms-1"/>
                </button>
              </div>

              {/* Right: Search by Name */}
              <div className="relative w-full md:w-80">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <HiOutlineSearch size={20} />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by friend name..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-sm shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-600 placeholder:text-slate-400 font-medium"
                />
              </div>
            </div>
          )}
        </header>

        <div className="flex flex-col  items-center">
          {timelineData.length === 0 ? (
            <main className="flex flex-col  items-center justify-center py-10">
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
            <div className="w-full flex flex-col  gap-8 items-center">
              {filteredTimelineData.map((entry) => {
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
                              with
                              <span className="text-teal-800 ps-2">
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
