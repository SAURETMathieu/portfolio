import Image from "next/image";
import React from "react";
import DynamicIcon from "./DynamicIcon";

interface Tag {
  id: number;
  name: string;
}

interface LinkType {
  id: number;
  name: string;
  icon: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: Tag[];
  links: LinkType[];
}

function ProjectCard({
  title,
  description,
  imageSrc,
  tags,
  links,
}: ProjectCardProps) {
  return (
    <div className="p-2 flex flex-col justify-between min-w-[288px] sm:min-h-[520px] max-w-96 bg-accent/60 border shadow shadow-ring border-ring rounded">
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
        <div className="flex justify-center">
          {links.map((link) => (
            <a href={link.url} key={link.id} target="_blank" rel="noopener noreferrer">
              <span className="hover:scale-105 hover:opacity-90 font-bold bg-accent border border-ring text-xs p-1 rounded inline-flex items-center gap-1 m-1 mt-2">
                <DynamicIcon name={link.icon} size={16} />
                {link.name}
              </span>
            </a>
          ))}
        </div>
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

export default ProjectCard;
