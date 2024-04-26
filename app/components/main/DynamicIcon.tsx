import React from "react";
import { iconComponents } from "../icons";

interface Props {
  name: string;
  size:number;
}

const DynamicIcon: React.FC<Props> = ({ name, size }) => {
  const IconComponent = iconComponents[name as keyof typeof iconComponents];

  return (
    <span>
      {IconComponent && <IconComponent size={size}/>}
    </span>
  );
}

export default DynamicIcon;
