import React from "react";
import { cn } from "../lib/utils";

export function Card({ className, title, description }) {
  return (
    <div
      className={cn(
        `p-2 border-lg border-[2px] rounded-lg border-[#0F0F10] bg-[#0B0B0C] ${className}`
      )}
    >
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full flex justify-center items-center bg-[#280F42]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#CA3FAA"
            class="bi bi-hdd-rack"
            viewBox="0 0 16 16"
          >
            <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
            <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3-4v2H4V7z" />
          </svg>
        </div>
        <span className="text-[16px] font-medium text-[#fff]">{title}</span>
      </div>
      <p className="text-[#7F7F87] font-normal text-[16px]">{description}</p>
    </div>
  );
}
