import React from "react";
import { ComponentPropsWithoutRef } from "react";

export const CodaIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 48 48"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" fill="#ff8a65" d="M32,16c1.558,0,3.574,0.902,5.275,2.357c0.69,0.591,1.699,0.768,2.511,0.362 C40.537,18.343,41,17.594,41,16.745V9c0-2.209-1.791-4-4-4H11C8.791,5,7,6.791,7,9v30c0,2.209,1.791,4,4,4h26c2.209,0,4-1.791,4-4 l0-7.636c0-0.788-0.361-1.565-1.03-1.98c-0.854-0.529-1.897-0.434-2.637,0.208C35.62,31.077,33.576,32,32,32c-3.848,0-8-3.059-8-8 S28.152,16,32,16z"/>
    </svg>
  );
};
