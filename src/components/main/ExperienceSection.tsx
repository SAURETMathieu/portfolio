import { useLocale, useTranslations } from "next-intl";
import experiences from "../../data/experiences.json";
import ExperienceCard from "./ExperienceCard";

function ExperienceSection() {
  const t = useTranslations("ExperienceSection");
  const locale = useLocale();

  return (
    <section
      id="experiences"
      className="w-fit max-w-screen-xl text-center my-32 mx-auto"
    >
      <h3 className="text-3xl lg:text-4xl font-bold mb-6">{t("title")}</h3>
      <div className="grid place-items-center gap-8 xl:gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience[`title${locale === "en" ? "En" : ""}`]}
            title={experience[`title${locale === "en" ? "En" : ""}`]}
            description={experience[`description${locale === "en" ? "En" : ""}`]}
            imageSrc={experience.imageSrc}
            tags={experience.tags}
            start={experience.startAt}
            end={experience.finishAt}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
