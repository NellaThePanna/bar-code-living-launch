import { useState } from "react";
import { UenoArrow } from "./UenoArrow";
import { UenoPlate } from "./UenoPlate";

const ARMCHAIR = {
  fig: "04",
  label: "Residential Bespoke Furniture · leather armchair",
  alt: "Placeholder photo: curved leather armchair by a bookshelf, hand holding a coffee cup",
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2-_d1xbeFXH_X4OtH95CchUiUSHhfqQMUHx455P3S-pupPVy0cYjWIXQzFi6CTh8-d-eNiIChyB-igV6kz_AcKW40y4Cg07Jyg1lxjcclo2Opv8w_sEOl_glGp3dYu2IaMo1TcSuMXzgmpWOlJHtSMsuCIqAuILM2muPwHASLBLJrxop1ROC9FrMJIpkhgDC1MoyJ2I7LxKutvhDX5b5jUomoKP8Jb7tZ4sRILag8RGRKrbDNnI0Y",
};
const SOFA = {
  fig: "05",
  label: "Green modular sofa",
  alt: "Placeholder photo: moss green modular sofa in a bright living room",
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyscq6_Zwo_TiWFuyvGOU5fLvn0wb0wSMMHa4rZT1EgO49PtRiBVN9j3sTYVyfIaFkc16eBMZWG4g9FWxk2pMZfhYqegdx97rQl7PgMdRN2fpyd_wVBDs5hyRJVRF9WtzXLh5iqqiJKmHbQO38Y4fvAyhxwluQ8dXed-cOmqk5l8GavCa-0TfEoDBpJaBnbZ3F897i3zRAR4pV7sjUd7JKoHtrJAQX8pl2ExVksxMlO8Z_rCAYbdaR",
};
const CHAIR = {
  fig: "06",
  label: "Woven cord chair",
  alt: "Placeholder photo: woven paper-cord chair seat, close detail",
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrvdF7tkcWwg_XHbUc3dgb-NRVgegMokzJ8nCY6gFTauMTEynX_z_uY8j4039IFCQOA6YPMmoGbhj5HEeKNMJTU6zTK1Uc5WTBjfdoYdYn8JrJgVa10ueeD5zxBz3uI1cnCjiT7oPUA8v2tCDWrwj4MyQPn2x-QEbGgjeirJmykH57QZDuN6Ygc1uNYgM75VQLzsoFCSGAjUwIzmIfbsJQBE7pr8ou0nN16nkelV_JE_i_T8gjCywN",
};
const SLIDES = [CHAIR, ARMCHAIR, SOFA];

const photo = "w-full aspect-[4/3] lg:aspect-auto lg:h-[440px] object-cover bg-(--burgundy-ink)/5";

export function UenoResidential() {
  const [slide, setSlide] = useState(0);
  const current = SLIDES[slide]!;
  const step = (by: number) => setSlide((s) => (s + by + SLIDES.length) % SLIDES.length);

  return (
    <section
      id="residential"
      className="on-light w-full bg-white py-20 lg:py-32 px-6 lg:px-16 border-b border-(--burgundy-ink)/18"
      data-purpose="portfolio-residential"
    >
      <div className="max-w-[1312px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-(family-name:--ueno-sans) font-normal text-(--burgundy-ink) leading-tight">
              Spaces That Breathe Nature
              <br />
              and Quiet Luxury
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-base md:text-lg font-medium text-(--burgundy-ink)">Custom Living Furniture</span>
            <a
              className="inline-flex shrink-0 items-center gap-3 h-11 px-5 whitespace-nowrap bg-(--burgundy-ink) hover:bg-(--burgundy-deep) text-white text-xs uppercase tracking-[0.12em] font-medium transition-colors"
              href="#furniture"
            >
              <span>Learn more</span>
              <UenoArrow />
            </a>
          </div>
        </div>

        <div className="text-(--burgundy-light) font-mono text-sm tracking-wider pb-4 border-b border-(--burgundy-ink)/18">
          01 / RESIDENTIAL ARCHITECTURE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-8 items-start">
          <div className="lg:col-span-7">
            <img alt={ARMCHAIR.alt} className={photo} src={ARMCHAIR.src} />
            <UenoPlate fig={ARMCHAIR.fig}>{ARMCHAIR.label}</UenoPlate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mt-8 text-xs sm:text-sm text-(--burgundy-light)">
              <div className="border-t border-(--burgundy-ink)/18 pt-3">
                <span className="block font-semibold text-(--burgundy-ink)">Design Approach</span>
                <p className="mt-1 text-(--burgundy-light)">
                  An inviting, calm, human-centered seating piece designed for prolonged repose.
                </p>
              </div>
              <div className="border-t border-(--burgundy-ink)/18 pt-3">
                <span className="block font-semibold text-(--burgundy-ink)">Material Strategy</span>
                <p className="mt-1 text-(--burgundy-light)">[Materials — TBD]</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img alt={SOFA.alt} className={photo} src={SOFA.src} />
            <UenoPlate fig={SOFA.fig}>{SOFA.label}</UenoPlate>
            <div className="mt-8 border-t border-(--burgundy-ink)/18 pt-3 text-xs sm:text-sm">
              <span className="block font-semibold text-(--burgundy-ink)">Comfort Engineering</span>
              <p className="mt-1 text-(--burgundy-light)">[Detail — TBD]</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <img alt={current.alt} className={photo} src={current.src} />
            <UenoPlate fig={current.fig}>{current.label}</UenoPlate>
            <div className="mt-8 flex items-center justify-between gap-4">
              <p aria-live="polite" className="font-mono text-[11px] tracking-[0.14em] text-(--burgundy-light)">
                {slide + 1} / {SLIDES.length}
              </p>
              <div className="flex">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => step(-1)}
                  className="w-10 h-10 flex items-center justify-center bg-white text-(--burgundy-ink) border border-(--burgundy-ink) hover:bg-(--burgundy-ink)/5 transition-colors"
                >
                  <UenoArrow direction="left" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => step(1)}
                  className="w-10 h-10 flex items-center justify-center bg-(--burgundy-ink) text-white border border-(--burgundy-ink) hover:bg-(--burgundy-deep) transition-colors"
                >
                  <UenoArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
