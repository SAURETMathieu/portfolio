import Image from "next/image";
import React from "react";
import DynamicIcon from "./DynamicIcon";

interface Tag {
  id: number;
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: Tag[];
  start: string;
  end: string;
}

function ExperienceCard({
  title,
  description,
  imageSrc,
  tags,
  start,
  end,
}: ProjectCardProps) {
  return (
    <div className="p-2 flex flex-col justify-between min-w-[288px] sm:min-h-[450px] max-w-96 bg-accent/60 border shadow shadow-ring border-ring rounded">
      <div className="flex-none">
        <Image
          src={imageSrc}
          alt={title}
          width={256}
          height={144}
          className="aspect-video w-full h-1/3 object-cover border-2"
        />
      </div>
      <div className="p-2 grow">
        <h3 className="text-xl font-bold flex-start">{title}</h3>
        <h4 className="font-bold">{start} - {end}</h4>
        <p className="text-left font-extralight mt-2">{description}</p>
      </div>
      <div className="flex flex-none flex-wrap justify-center">
        {tags.map((tag) => (
          <span
            className="font-bold bg-accent border border-ring text-xs p-1 rounded inline-flex items-center gap-1 m-1 mt-2"
            key={tag.id}
          >
            <DynamicIcon name={tag.name} size={16} />
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
