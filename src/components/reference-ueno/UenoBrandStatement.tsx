export function UenoBrandStatement() {
  return (
    <section
      className="relative w-full bg-white bg-dot-grid py-20 px-6 md:px-12 lg:px-16 border-b border-neutral-200"
      data-purpose="brand-statement-grid"
    >
      <div className="max-w-7xl mx-auto">
        <div className="w-full text-center overflow-hidden mb-12">
          <h2 className="font-(family-name:--ueno-sans) font-extrabold text-[min(9.5vw,9.25rem)] whitespace-nowrap leading-none tracking-ultra-tight text-neutral-900 select-none uppercase">
            BARCODE LIVING
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-300/80 text-xs sm:text-sm md:text-base font-medium tracking-wide text-neutral-800">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span> User Centered
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span> Elegant
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span> Narrative
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span> Optimized
          </span>
        </div>

        <div className="relative my-20 max-w-4xl mx-auto">
          <div className="relative bg-(--cream-deep) rounded-3xl p-8 sm:p-14 border border-neutral-300 shadow-sm flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none text-center">
              <span className="font-(family-name:--ueno-sans) text-2xl sm:text-4xl text-white font-medium drop-shadow-md">
                Personalized <span className="font-(family-name:--ueno-serif) italic font-light">Interior</span>
              </span>
            </div>
            <div className="relative z-10 w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                alt="Bespoke deep forest green lacquered interior storage cabinet"
                className="w-full h-auto max-h-[380px] object-cover rounded-xl filter drop-shadow-2xl brightness-90 contrast-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCifqgE7tv0i-GlhzitzFHG29baqNd3i-ozn79cDVfsq8WFVj7k4xFvrXfPFUphrYm3p2K_Ncs235useOQ25MHPO9dY4loW_aV2tAnv7892Od4bI_OCL9rhDXBxlBbYeWhuYrvfq4A21WsfbUK_RVhqq6Bgy_N5ZAVosbz4VovhbpCaKlaqRcrUlYkZKP24d3HfOVaVRwOnF6doeQCmVnjHN1-T528VvDWEjRLD4-EWqVX6r1PUmk4V"
              />
            </div>
            <div className="w-full flex justify-between items-center mt-6 pt-4 border-t border-neutral-300/60 text-[11px] text-neutral-500 font-mono tracking-wider">
              <span>SPEC: BESPOKE LACQUERED JOINERY</span>
              <span>COLLECTION 2026</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
          <div className="md:col-span-3">
            <a
              className="inline-flex items-center justify-between gap-4 px-6 py-3.5 rounded-full bg-(--burgundy-ink) hover:bg-(--burgundy-deep) text-white font-medium text-sm transition-all shadow-md group"
              href="#contact"
            >
              <span>Contact Us</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="md:col-span-4 text-xs sm:text-sm text-neutral-600 border-l border-neutral-300 pl-6 leading-relaxed">
            <p className="font-medium text-neutral-900">[Award — TBD]</p>
            <p className="text-neutral-500">[Awarding body · Year — TBD]</p>
          </div>
          <div className="md:col-span-5 text-xs sm:text-sm text-neutral-600 leading-relaxed lg:pl-6">
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
