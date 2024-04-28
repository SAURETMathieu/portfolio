import { useLocale } from "next-intl";
import DynamicIcon from "./DynamicIcon";

interface SkillType {
  id: number;
  name: string;
  nameEn: string;
}

interface SkillCardProps {
  title: string;
  skills: SkillType[];
}

function SkillCard({ title, skills }: SkillCardProps) {

  const locale = useLocale();
  
  return (
    <div className="p-2 min-w-72 max-w-96 bg-accent/60 border shadow shadow-ring border-ring rounded">
      <div className="p-2 h-2/3 flex-col justify-evenly">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex flex-wrap justify-evenly mt-4">
          {skills.map((skill) => (
            <div
              className="flex flex-col text-sm justify-center items-center w-1/3 mt-4 gap-2"
              key={skill.id}
            >
              <DynamicIcon name={skill.name} size={62}/>
              {skill[`name${locale === "en" ? "En" : ""}`]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
