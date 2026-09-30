import { CurtainReveal } from "@/components/CurtainReveal";
import afterKitchen from "@/assets/after-kitchen.jpg";
import afterLiving from "@/assets/after-living.jpg";
import afterSuite from "@/assets/after-suite.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import beforeLiving from "@/assets/before-living.jpg";
import beforeSuite from "@/assets/before-suite.jpg";

// nova-debt: stock placeholder pairs stand in until real client before/after photography exists
const projects = [
  { title: "Project 01", before: beforeLiving, after: afterLiving },
  { title: "Project 02", before: beforeKitchen, after: afterKitchen },
  { title: "Project 03", before: beforeSuite, after: afterSuite },
];

export function OurCreations() {
  return (
    <section
      id="our-creations"
      aria-labelledby="our-creations-heading"
      className="bg-cream-deep px-5 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1480px]">
        <p className="eyebrow">[ Selected Work ]</p>
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2
            id="our-creations-heading"
            className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1] font-medium"
          >
            Our Creations
          </h2>
          <p className="font-founder-body max-w-md text-base leading-relaxed text-burgundy">
            Three rooms, before and after. Draw back the curtain on each to see the change.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {projects.map((project, index) => (
            <CurtainReveal
              key={project.title}
              {...project}
              index={index}
              mode="hover"
              size="compact"
              placeholder
            />
          ))}
        </div>
      </div>
    </section>
  );
}
