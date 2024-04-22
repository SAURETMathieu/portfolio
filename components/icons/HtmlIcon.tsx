import React from "react";
import { ComponentPropsWithoutRef } from "react";

export const HtmlIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26" />
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529" />
        <path
          d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
