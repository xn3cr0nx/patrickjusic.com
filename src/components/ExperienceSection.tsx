import experiences from "@/components/experiences";
import RoleAccordion from "@/components/role-accordion";
import { Accordion } from "@/components/ui/accordion";

export default function ExperienceSection() {
  return (
    <section className="mt-8">
      <p className="text-xl lg:text-3xl font-bold">Background</p>
      <Accordion type="single" collapsible className="w-full mt-4">
        {experiences.map((experience, index) => (
          <RoleAccordion
            key={experience.company}
            value={`item-${index + 1}`}
            title={experience.title}
            company={experience.company}
            companyUrl={experience.companyUrl}
            period={experience.period}
            content={experience.content}
          />
        ))}
      </Accordion>
    </section>
  );
}
