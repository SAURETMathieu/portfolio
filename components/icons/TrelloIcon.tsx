import React from "react";
import { ComponentPropsWithoutRef } from "react";

export const TrelloIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 17 17"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          d="M16.5 15.833c0 0.365-0.302 0.667-0.667 0.667h-14.666c-0.364 0-0.667-0.302-0.667-0.667v-14.666c0-0.365 0.302-0.667 0.667-0.667h14.667c0.364 0 0.667 0.302 0.667 0.667v14.666zM7.833 2.5c0-0.188-0.146-0.333-0.333-0.333h-5c-0.188 0-0.333 0.146-0.333 0.333v10.667c0 0.187 0.146 0.333 0.333 0.333h5c0.188 0 0.333-0.146 0.333-0.333v-10.667zM14.833 2.5c0-0.188-0.146-0.333-0.333-0.333h-5c-0.188 0-0.333 0.146-0.333 0.333v6.667c0 0.187 0.145 0.333 0.333 0.333h5c0.188 0 0.333-0.146 0.333-0.333v-6.667z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
