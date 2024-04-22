import React from "react";
import { ComponentPropsWithoutRef } from "react";

export const BulmaIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 373"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <polygon fill="#00D1B2" fillRule="nonzero" points="0 256 23.2727273 93.0909091 116.363636 0 232.727273 116.363636 162.909091 186.181818 256 279.272727 116.363636 372.363636"/>
    </g>
    </svg>
  );
};