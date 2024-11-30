import react from "react";
import { useState } from "react";
import { cn } from "../lib/utils";
// className={`bg-[${props.bgColor}] px-3 py-2 rounded-full ${props.hover?"hover:":""}bg-[${props.bgHoverColor}]`}
export function Button({ children, className }) {
  const [buttonText, setButtonText] = useState(children);
  return (
    <button
      className={cn(
        "font-normal text-[16px] text-[#fff] bg-[#006fee] hover:bg-[#006fee] px-5 py-2 rounded-full",
        className
      )}
    >
      {buttonText}
    </button>
  );
}
