import { useLocale, useTranslations } from "next-intl";
import skills from "../../data/skills.json";
import SkillCard from "./SkillCard";

function SkillSection() {
  const t = useTranslations("SkillSection");
  const locale = useLocale();

  return (
    <section
      id="skills"
      className="w-fit max-w-screen-xl text-center my-32 mx-auto"
    >
      <h3 className="text-3xl font-bold lg:text-4xl mb-6">{t("title")}</h3>
      <div className="grid place-items-center gap-8 xl:gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill[`title${locale === "en" ? "En" : ""}`]}
            title={skill[`title${locale === "en" ? "En" : ""}`]}
            skills={skill.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
