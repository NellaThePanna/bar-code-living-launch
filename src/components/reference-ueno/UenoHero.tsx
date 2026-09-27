import monogramReversed from "../../../reference/logo/barcode-living-monogram-reversed.png";

export function UenoHero() {
  return (
    <section
      className="relative w-full bg-(--ueno-darkwood) text-white overflow-hidden min-h-[920px] flex flex-col justify-between"
      data-purpose="hero-viewport"
    >
      <header className="relative z-20 w-full px-6 md:px-12 lg:px-16 pt-8 pb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs md:text-sm tracking-wide font-normal">
        <div className="flex items-center gap-12">
          <a className="inline-flex items-center" href="#">
            <img src={monogramReversed} alt="BARCODE Living" className="h-9 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-neutral-300">
            <a className="hover:text-white flex items-center gap-1.5 transition-colors" href="#projects">
              <span>Project</span> <span className="text-neutral-500 font-light">+</span>
            </a>
            <a className="hover:text-white flex items-center gap-1.5 transition-colors" href="#approach">
              <span>Approach</span> <span className="text-neutral-500 font-light">+</span>
            </a>
            <a className="hover:text-white flex items-center gap-1.5 transition-colors" href="#about">
              <span>About us</span> <span className="text-neutral-500 font-light">+</span>
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-8 md:gap-14 text-neutral-300">
          <div className="hidden sm:block text-right leading-snug">
            <span className="block text-white font-medium">Sunday</span>
            <span className="text-neutral-400 text-xs">17.06 - 27 June 2026</span>
          </div>
          <a
            className="inline-flex items-center gap-2 text-white hover:text-(--ueno-terracotta) font-medium transition-colors border-b border-white/20 pb-0.5"
            href="#contact"
          >
            <span>Contact us</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <line x1="7" x2="17" y1="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </header>

      <div className="relative z-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 px-6 md:px-12 lg:px-16 py-8 items-center gap-8">
        <div className="lg:col-span-6 relative flex flex-col justify-center">
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#351C14] aspect-[4/5]">
              <img
                alt="Immersive warm wood interior with bespoke green seating"
                className="w-full h-full object-cover brightness-95 contrast-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9_fsZaVHneaoeYBwf_uKZaCM9irv7iRo2fhpRPGEL8nb8yL9dpvMhAQM7eeM3mVVRfzlDvS2ijw9EDbUdaDDA5KevPb1jibsNgzjEVfgUNX8ItmchUiEB4EhlAVvB8i4-KWH5I6KZhR5A6KUuU4PdK_LNNK7xuFRkRFM6JJR0PsgdEFs_Bpgl-y9yWZbfWtJsCw9MLAR3Zix8fxHSvRgAwpgq0aeErS-h0DPIO6tSp_bed8eiTrL_"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/15 text-xs md:text-sm text-neutral-200">
                <p className="leading-relaxed">
                  BARCODE Living creates immersive interiors with natural textures and deep tones.
                </p>
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 drop-shadow">
                <img src={monogramReversed} alt="" className="h-8 w-auto opacity-90" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block w-48 h-36 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <img
                alt="Sculptural green seating detail"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjyh5spzC8fEhO4CWKRyyZTu6mds0M34i01Vf8ejYNaojaBFisrI4V-DRrlBi5bFv4sfilC4xZFO77F_MMJCj4dEQX7kuffLBJn_jLUYOQne6A9DOBrn-ne2R5NvC0aKH5TH4RKsfe0stCARfqaNQuSeYTGnkrl2ZlVISxTAd8i0Xyo0J1vlnPws1tcPDmDEFlKGOsZo_Hx7a9EkeV5AfZBheYKXOdDrXSxANZ9ECKNEnK4vzHsB3w"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between h-full pt-6 lg:pl-6">
          <div className="flex items-center gap-6 text-neutral-400 mb-12">
            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 cursor-pointer transition-all">
              <svg className="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                ></path>
              </svg>
            </div>
            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 cursor-pointer transition-all">
              <svg className="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                ></path>
              </svg>
            </div>
            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 cursor-pointer transition-all">
              <svg className="w-4 h-4 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                ></path>
              </svg>
            </div>
          </div>

          <div className="my-auto py-8">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-(family-name:--ueno-sans) font-normal tracking-tight leading-[1.08] text-white">
              Spaces That Breathe
              <br />
              Nature and Quiet
              <br />
              <span className="font-(family-name:--ueno-serif) italic font-light text-amber-100/90">Luxury</span>
            </h1>
          </div>

          <div className="grid grid-cols-3 pt-8 border-t border-white/10 text-xs md:text-sm text-neutral-400">
            <div>
              <span className="text-white font-medium block">Professional</span>
              <span>Interior Studio</span>
            </div>
            <div>
              <span className="text-white font-medium block">06 Solutions</span>
              <span>Spatial Systems</span>
            </div>
            <div className="text-right sm:text-left">
              <span className="text-white font-medium block">Est. [Year — TBD]</span>
              <span>[Location — TBD]</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-10 bg-gradient-to-b from-transparent to-(--ueno-espresso)/80"></div>
    </section>
  );
}
