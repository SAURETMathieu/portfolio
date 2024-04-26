import { ComponentPropsWithoutRef } from "react";

export const FrenchFlagIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { width?: number; height?: number }
) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 640 480"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#000091" d="M0 0h213.3v480H0z" />
        <path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
      </g>
    </svg>
  );
};
