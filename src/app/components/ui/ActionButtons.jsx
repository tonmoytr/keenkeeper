"use client";
import { TimelineContext } from "@/lib/context/TimelineContext";
import { useContext } from "react";
// Move icon imports to the Client Component
import {
  HiOutlinePhone,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineVideoCamera,
} from "react-icons/hi2";
import { toast } from "react-toastify";

// Create a lookup object
const icons = {
  Call: HiOutlinePhone,
  Text: HiOutlineChatBubbleLeftEllipsis,
  Video: HiOutlineVideoCamera,
};

const ActionButtons = ({ label, friendName, type }) => {
  // Select the correct icon based on the 'type' string
  const Icon = icons[type];
  const { addEntry } = useContext(TimelineContext);

  const handleTimelineEntry = () => {
    const entry = {
      id: Date.now(),
      type: type,
      name: friendName,
      date: new Date().toLocaleString(),
    };
    // console.log("Timeline entry added:", entry);
    // This is where your Context API logic will live!
    addEntry(friendName, type);
    toast.success(`${type} with ${friendName} added to timeline!`);
  };

  return (
    <button
      onClick={handleTimelineEntry}
      className="cursor-pointer flex flex-col items-center gap-4 p-6 border-[1.5px] border-gray-100 rounded-2xl hover:border-blue-400 hover:bg-blue-50/50 transition-all group w-full"
    >
      <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
        {Icon && (
          <Icon
            size={28}
            className="text-slate-700 group-hover:text-blue-600"
          />
        )}
      </div>
      <span className="font-bold text-gray-700">{label}</span>
    </button>
  );
};

export default ActionButtons;
