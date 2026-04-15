"use client";

import { ToastContainer } from "react-toastify";
import { TimelineProvider } from "../context/TimelineContext";

export default function AppProvider({ children }) {
  return (
    <div>
      <TimelineProvider>
        {children}
        <ToastContainer position="top-center" />
      </TimelineProvider>
    </div>
  );
}
