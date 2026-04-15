"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center">
      <div className="w-full max-w-sm h-64 md:h-80 mx-auto">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
      {/* <p className="text-slate-500 font-medium animate-pulse mt-4">
        Arranging your shelf...
      </p> */}
    </div>
  );
}
