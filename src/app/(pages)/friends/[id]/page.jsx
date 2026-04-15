import React from "react";
// npm install react-icons
import {
  HiOutlineBellAlert,
  HiOutlineArchiveBox,
  HiOutlineTrash,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineVideoCamera,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { FiEdit3 } from "react-icons/fi";
import Image from "next/image";
import { getFriends } from "@/lib/utils/getFriends";

const FriendDetailComponent = async ({ params }) => {
  const { id } = await params;
  const friends = await getFriends();
  const friend = friends.find((f) => f.id.toString() === id);

  const statusColors = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-orange-400 text-white",
    "on-track": "bg-emerald-700 text-white",
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#f8fafc] min-h-screen font-sans">
      <div className="flex flex-col lg:flex-row gap-6 p-6 border-[1.5px] border-blue-300 border-dashed rounded-lg bg-white shadow-sm">
        {/* Left Section: Profile Card */}
        <div className="w-full lg:w-[350px] flex flex-col gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="relative mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={96}
                height={96}
                className=" rounded-full object-cover border-4 border-gray-50 shadow-sm"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {friend.name}
            </h2>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${statusColors[friend.status]}`}
              >
                {friend.status}
              </span>
            </div>
            <div className="pb-4 flex gap-4">
              {friend.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-600 border border-emerald-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm italic text-gray-500 mb-4 leading-relaxed px-2">
              &quot;{friend.bio}&quot;
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Preferred:</span>
              <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                email <HiOutlineEnvelope size={14} />
              </button>
            </div>
          </div>

          {/* Action List */}
          <div className="flex flex-col gap-2">
            <button className="flex items-center justify-center gap-3 w-full py-3.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-semibold transition-all">
              <HiOutlineBellAlert size={20} className="text-gray-500" /> Snooze
              2 Weeks
            </button>
            <button className="flex items-center justify-center gap-3 w-full py-3.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-semibold transition-all">
              <HiOutlineArchiveBox size={20} className="text-gray-500" />{" "}
              Archive
            </button>
            <button className="flex items-center justify-center gap-3 w-full py-3.5 border border-gray-200 rounded-xl bg-white hover:bg-red-50 text-red-500 font-semibold transition-all group">
              <HiOutlineTrash
                size={20}
                className="group-hover:scale-110 transition-transform"
              />{" "}
              Delete
            </button>
          </div>
        </div>

        {/* Right Section: Content Dashboard */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-semibold text-[#244D3F]">
                {friend.days_since_contact}
              </div>
              <div className="text-lg font-normal text-gray-400 mt-2 capitalize tracking-tight">
                Days Since Contact
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-semibold text-[#244D3F]">
                {friend.goal}
              </div>
              <div className="text-lg font-normal text-gray-400 mt-2 capitalize tracking-tight">
                Goal (Days)
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-center items-center shadow-sm">
              <div className="text-2xl font-semibold text-[#244D3F] leading-tight">
                {new Date(friend.next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-tight">
                Next Due
              </div>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm relative group">
            <button className="absolute top-6 right-6 flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600 font-semibold border border-gray-200 transition-all">
              <FiEdit3 /> Edit
            </button>
            <h3 className="text-lg font-bold text-slate-800 mb-6">
              Relationship Goal
            </h3>
            <div className="text-lg text-gray-600">
              Connect every{" "}
              <span className="font-extrabold text-black ml-1">
                {friend.goal} days
              </span>
            </div>
          </div>

          {/* Quick Check-In Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex-grow">
            <h3 className="text-lg font-bold text-slate-800 mb-8">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <button className="flex flex-col items-center gap-4 p-6 border-[1.5px] border-gray-100 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 transition-all group">
                <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
                  <HiOutlinePhone
                    size={28}
                    className="text-slate-700 group-hover:text-blue-600"
                  />
                </div>
                <span className="font-bold text-gray-700">Call</span>
              </button>

              <button className="flex flex-col items-center gap-4 p-6 border-[1.5px] border-gray-100 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 transition-all group">
                <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
                  <HiOutlineChatBubbleLeftEllipsis
                    size={28}
                    className="text-slate-700 group-hover:text-blue-600"
                  />
                </div>
                <span className="font-bold text-gray-700">Text</span>
              </button>

              <button className="flex flex-col items-center gap-4 p-6 border-[1.5px] border-gray-100 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 transition-all group">
                <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
                  <HiOutlineVideoCamera
                    size={28}
                    className="text-slate-700 group-hover:text-blue-600"
                  />
                </div>
                <span className="font-bold text-gray-700">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailComponent;
