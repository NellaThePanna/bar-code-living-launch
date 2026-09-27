export function UenoResidential() {
  return (
    <section
      className="w-full bg-[#FAF9F6] py-24 px-6 md:px-12 lg:px-16 border-b border-neutral-200"
      data-purpose="portfolio-residential"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <h2 className="text-3xl sm:text-5xl font-(family-name:--ueno-sans) font-normal text-neutral-900 leading-tight">
              Spaces That Breathe Nature
              <br />
              and Quiet Luxury
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-base md:text-lg font-medium text-neutral-800">Custom Living Furniture</span>
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-(--ueno-terracotta) transition-colors"
              href="#furniture"
            >
              <span>Learn more</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-neutral-400 font-mono text-sm tracking-wider pb-4 border-b border-neutral-300">
          01 / RESIDENTIAL ARCHITECTURE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] bg-neutral-200 group">
              <img
                alt="Curved cognac leather bespoke armchair with hand holding coffee cup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2-_d1xbeFXH_X4OtH95CchUiUSHhfqQMUHx455P3S-pupPVy0cYjWIXQzFi6CTh8-d-eNiIChyB-igV6kz_AcKW40y4Cg07Jyg1lxjcclo2Opv8w_sEOl_glGp3dYu2IaMo1TcSuMXzgmpWOlJHtSMsuCIqAuILM2muPwHASLBLJrxop1ROC9FrMJIpkhgDC1MoyJ2I7LxKutvhDX5b5jUomoKP8Jb7tZ4sRILag8RGRKrbDNnI0Y"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <h3 className="text-2xl sm:text-3xl text-white font-(family-name:--ueno-sans) font-normal">
                  Residential{" "}
                  <span className="font-(family-name:--ueno-serif) italic font-light text-amber-100">Bespoke Furniture</span>
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-xs sm:text-sm text-neutral-600">
              <div className="border-t border-neutral-300 pt-3">
                <span className="block font-semibold text-neutral-900">Design Approach</span>
                <p className="mt-1 text-neutral-600">
                  An inviting, calm, human-centered seating piece designed for prolonged repose.
                </p>
              </div>
              <div className="border-t border-neutral-300 pt-3">
                <span className="block font-semibold text-neutral-900">Material Strategy</span>
                <p className="mt-1 text-neutral-600">
                  Upholstery: warm brown leather (earth tone) on solid smoked walnut base.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            <div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-neutral-200 shadow-md">
                <img
                  alt="Moss green modular seating form"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyscq6_Zwo_TiWFuyvGOU5fLvn0wb0wSMMHa4rZT1EgO49PtRiBVN9j3sTYVyfIaFkc16eBMZWG4g9FWxk2pMZfhYqegdx97rQl7PgMdRN2fpyd_wVBDs5hyRJVRF9WtzXLh5iqqiJKmHbQO38Y4fvAyhxwluQ8dXed-cOmqk5l8GavCa-0TfEoDBpJaBnbZ3F897i3zRAR4pV7sjUd7JKoHtrJAQX8pl2ExVksxMlO8Z_rCAYbdaR"
                />
              </div>
              <div className="mt-6 border-t border-neutral-300 pt-3 text-xs sm:text-sm">
                <span className="block font-semibold text-neutral-900">Comfort Engineering</span>
                <p className="mt-1 text-neutral-600">Balanced cushion density (soft + supportive multi-density latex).</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-200 shadow-md group">
              <img
                alt="Scandinavian paper cord woven chair craft detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrvdF7tkcWwg_XHbUc3dgb-NRVgegMokzJ8nCY6gFTauMTEynX_z_uY8j4039IFCQOA6YPMmoGbhj5HEeKNMJTU6zTK1Uc5WTBjfdoYdYn8JrJgVa10ueeD5zxBz3uI1cnCjiT7oPUA8v2tCDWrwj4MyQPn2x-QEbGgjeirJmykH57QZDuN6Ygc1uNYgM75VQLzsoFCSGAjUwIzmIfbsJQBE7pr8ou0nN16nkelV_JE_i_T8gjCywN"
              />
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200">
                <button
                  aria-label="Previous image"
                  className="w-8 h-8 rounded-full bg-white text-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
                <button
                  aria-label="Next image"
                  className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-(--ueno-forest) transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
