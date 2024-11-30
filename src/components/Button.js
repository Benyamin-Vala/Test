import React from "react";
import { cn } from "../lib/utils";
// className={`bg-[${props.bgColor}] px-3 py-2 rounded-full ${props.hover?"hover:":""}bg-[${props.bgHoverColor}]`}

const Button = React.forwardRef(
  ({ buttonText, bgColor, bgHoverColor, hover, className }, ref) => {
    return (
      <button
        className={cn(
          `font-normal text-[16px] text-[#fff] bg-[${bgColor}] ${
            hover ? `hover:bg-[${bgHoverColor}]` : ""
          } px-5 py-2 rounded-full`,
          className
        )}
        ref={ref}
      >
        {buttonText}
      </button>
    );
  }
);

export { Button };
