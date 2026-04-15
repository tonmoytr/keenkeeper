"use client";
import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const addEntry = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      name: friendName,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setTimelineData([...timelineData, newEntry]); // Add to start of array
    return newEntry; // Return it so we can use it for Toasts
  };

  return (
    <TimelineContext.Provider value={{ timelineData, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};
