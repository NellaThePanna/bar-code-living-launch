import { createFileRoute } from "@tanstack/react-router";
import uenoCss from "@/components/reference-ueno/reference-ueno.css?url";
import { UenoBrandStatement } from "@/components/reference-ueno/UenoBrandStatement";
import { UenoCommercial } from "@/components/reference-ueno/UenoCommercial";
import { UenoFooter } from "@/components/reference-ueno/UenoFooter";
import { UenoHero } from "@/components/reference-ueno/UenoHero";
import { UenoResidential } from "@/components/reference-ueno/UenoResidential";

export const Route = createFileRoute("/reference-ueno")({
  head: () => ({
    meta: [{ title: "BARCODE Living — [Services — TBD]" }],
    links: [
      { rel: "stylesheet", href: uenoCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Syne:wght@500;700;800&display=swap",
      },
    ],
  }),
  component: ReferenceUeno,
});

function ReferenceUeno() {
  return (
    <div className="ueno-ref bg-white text-(--burgundy-ink) font-(family-name:--ueno-sans) antialiased selection:bg-(--burgundy-ink) selection:text-white">
      <UenoHero />
      <UenoBrandStatement />
      <UenoResidential />
      <UenoCommercial />
      <UenoFooter />
    </div>
  );
}
