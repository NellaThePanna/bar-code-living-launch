import monogramCream from "../../../reference/logo/barcode-living-monogram-cream.png";
import { UenoArrow } from "./UenoArrow";
import { UenoPlate } from "./UenoPlate";

export function UenoHero() {
  return (
    <section
      className="on-dark relative w-full bg-(--burgundy-ink) text-white overflow-hidden flex flex-col"
      data-purpose="hero-viewport"
    >
      <header className="relative z-20 w-full h-24 px-6 lg:px-16 border-b border-white/14">
        <div className="max-w-[1312px] h-full mx-auto flex items-center justify-between gap-6 text-xs md:text-sm tracking-wide font-normal">
          <div className="flex items-center gap-12">
            <a className="inline-flex items-center" href="#">
              <img src={monogramCream} alt="BARCODE Living" className="h-9 w-auto" />
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-(--cream-deep)/90">
              <a className="hover:text-white transition-colors" href="#projects">
                Project
              </a>
              <a className="hover:text-white transition-colors" href="#approach">
                Approach
              </a>
              <a className="hover:text-white transition-colors" href="#about">
                About us
              </a>
            </nav>
          </div>
          <a
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-white hover:text-(--cream-deep) font-medium transition-colors border-b border-white/40 pb-1"
            href="#contact"
          >
            <span>Contact us</span>
            <UenoArrow />
          </a>
        </div>
      </header>

      <div className="relative z-10 w-full px-6 lg:px-16 py-20 lg:py-32">
        <div className="max-w-[1312px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="w-full max-w-[512px] mx-auto lg:mx-0">
              <div className="relative">
                <div className="relative overflow-hidden aspect-[4/5] bg-(--burgundy-deep)">
                  <img
                    alt="Placeholder photo: timber-panelled dining room with green booth seating"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9_fsZaVHneaoeYBwf_uKZaCM9irv7iRo2fhpRPGEL8nb8yL9dpvMhAQM7eeM3mVVRfzlDvS2ijw9EDbUdaDDA5KevPb1jibsNgzjEVfgUNX8ItmchUiEB4EhlAVvB8i4-KWH5I6KZhR5A6KUuU4PdK_LNNK7xuFRkRFM6JJR0PsgdEFs_Bpgl-y9yWZbfWtJsCw9MLAR3Zix8fxHSvRgAwpgq0aeErS-h0DPIO6tSp_bed8eiTrL_"
                  />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2">
                    <img src={monogramCream} alt="" className="h-8 w-auto opacity-90" />
                  </div>
                </div>
                <div className="absolute bottom-8 -right-8 hidden sm:block w-[200px] h-[150px] border-8 border-(--burgundy-ink)">
                  <img
                    alt="Placeholder photo: sculptural green sofa detail"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjyh5spzC8fEhO4CWKRyyZTu6mds0M34i01Vf8ejYNaojaBFisrI4V-DRrlBi5bFv4sfilC4xZFO77F_MMJCj4dEQX7kuffLBJn_jLUYOQne6A9DOBrn-ne2R5NvC0aKH5TH4RKsfe0stCARfqaNQuSeYTGnkrl2ZlVISxTAd8i0Xyo0J1vlnPws1tcPDmDEFlKGOsZo_Hx7a9EkeV5AfZBheYKXOdDrXSxANZ9ECKNEnK4vzHsB3w"
                  />
                </div>
              </div>
              <UenoPlate fig="01" tone="dark" note="Placeholder photography">
                Timber dining room<span className="hidden sm:inline"> · Fig. 02 — green sofa, inset</span>
              </UenoPlate>
              <p className="mt-4 text-[13px] leading-relaxed text-(--cream-deep)/80">
                BARCODE Living creates immersive interiors with natural textures and deep tones.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pl-6">
            <nav aria-label="Sections" className="flex items-center gap-8 mb-12">
              <a
                className="text-xs uppercase tracking-[0.12em] text-white border-b border-white/40 pb-1 hover:text-(--cream-deep) transition-colors"
                href="#residential"
              >
                Residential
              </a>
              <a
                className="text-xs uppercase tracking-[0.12em] text-white border-b border-white/40 pb-1 hover:text-(--cream-deep) transition-colors"
                href="#commercial"
              >
                Commercial
              </a>
            </nav>

            <div className="my-auto py-8">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-(family-name:--ueno-sans) font-normal tracking-tight leading-[1.08] text-white">
                Spaces That Breathe
                <br />
                Nature and Quiet
                <br />
                <span className="font-(family-name:--ueno-serif) italic font-light text-(--cream-deep)">Luxury</span>
              </h1>
            </div>

            <div className="grid grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-white/14 text-xs md:text-sm text-(--cream-deep)/80">
              <div>
                <span className="text-white font-medium block">Professional</span>
                <span>Interior Studio</span>
              </div>
              <div>
                <span className="text-white font-medium block">[Services — TBD]</span>
                <span>[Detail — TBD]</span>
              </div>
              <div className="text-right sm:text-left">
                <span className="text-white font-medium block">Est. [Year — TBD]</span>
                <span>[Location — TBD]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
