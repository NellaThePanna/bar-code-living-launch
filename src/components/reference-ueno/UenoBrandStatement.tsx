import { UenoArrow } from "./UenoArrow";
import { UenoPlate } from "./UenoPlate";

export function UenoBrandStatement() {
  return (
    <section
      className="on-light relative w-full bg-white bg-dot-grid py-20 lg:py-32 px-6 lg:px-16 border-b border-(--burgundy-ink)/18"
      data-purpose="brand-statement-grid"
    >
      <div className="max-w-[1312px] mx-auto">
        <div className="w-full text-center overflow-hidden mb-12">
          <h2 className="font-(family-name:--ueno-sans) font-extrabold text-[min(9.5vw,9.25rem)] whitespace-nowrap leading-none tracking-ultra-tight text-(--burgundy-ink) select-none uppercase">
            BARCODE LIVING
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-(--burgundy-ink)/18 text-xs sm:text-sm md:text-base font-medium tracking-wide text-(--burgundy-ink)">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-(--burgundy-ink)"></span> User Centered
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-(--burgundy-ink)"></span> Elegant
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-(--burgundy-ink)"></span> Narrative
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-(--burgundy-ink)"></span> Optimized
          </span>
        </div>

        <div className="relative my-20 lg:my-32 max-w-4xl mx-auto">
          <div className="relative bg-white p-8 sm:p-14 border border-(--burgundy-ink)/18 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full max-w-2xl">
              <div className="relative">
                <img
                  alt="Placeholder photo: deep green lacquered cabinetry with glass-fronted shelves"
                  className="w-full h-auto max-h-[380px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCifqgE7tv0i-GlhzitzFHG29baqNd3i-ozn79cDVfsq8WFVj7k4xFvrXfPFUphrYm3p2K_Ncs235useOQ25MHPO9dY4loW_aV2tAnv7892Od4bI_OCL9rhDXBxlBbYeWhuYrvfq4A21WsfbUK_RVhqq6Bgy_N5ZAVosbz4VovhbpCaKlaqRcrUlYkZKP24d3HfOVaVRwOnF6doeQCmVnjHN1-T528VvDWEjRLD4-EWqVX6r1PUmk4V"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-w-[90%] pointer-events-none text-center">
                  <span className="block px-6 py-4 bg-(--burgundy-ink) font-(family-name:--ueno-sans) text-2xl sm:text-4xl text-white font-medium">
                    Personalized <span className="font-(family-name:--ueno-serif) italic font-light text-(--cream-deep)">Interior</span>
                  </span>
                </div>
              </div>
              <UenoPlate fig="03">Cabinetry</UenoPlate>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="md:col-span-3">
            <a
              className="inline-flex shrink-0 items-center gap-3 h-11 px-5 whitespace-nowrap bg-(--burgundy-ink) hover:bg-(--burgundy-deep) text-white text-xs uppercase tracking-[0.12em] font-medium transition-colors"
              href="#contact"
            >
              <span>Contact Us</span>
              <UenoArrow />
            </a>
          </div>
          <div className="md:col-span-4 text-xs sm:text-sm text-(--burgundy-light) border-l border-(--burgundy-ink)/18 pl-6 leading-relaxed">
            <p className="font-medium text-(--burgundy-ink)">[Award — TBD]</p>
            <p className="text-(--burgundy-light)">[Awarding body · Year — TBD]</p>
          </div>
          <div className="md:col-span-5 text-xs sm:text-sm text-(--burgundy-light) leading-relaxed lg:pl-6">
            <p>
              BARCODE Living crafts stunning interiors that seamlessly blend organic materials, vibrant colors, and the
              profound essence of human experience, creating spaces that truly resonate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
