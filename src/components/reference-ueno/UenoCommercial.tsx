export function UenoCommercial() {
  return (
    <section
      className="relative w-full bg-(--ueno-darkwood) text-white py-24 px-6 md:px-12 lg:px-16 overflow-hidden"
      data-purpose="portfolio-commercial"
    >
      <div className="absolute inset-0 bg-dark-slats opacity-30 pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16">
          <div className="lg:col-span-8">
            <span className="font-mono text-sm tracking-widest text-(--burgundy-light)/70 block mb-2">02</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-(family-name:--ueno-sans) font-normal tracking-tight leading-tight text-white">
              Commercial Spatial Experience ·<br />
              <span className="font-(family-name:--ueno-serif) italic font-light text-(--burgundy-ink)">F&amp;B Interior</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-neutral-300 text-xs sm:text-sm leading-relaxed border-l border-white/15 pl-6 pt-2">
            <p>
              BARCODE Living crafts stunning interiors that seamlessly blend organic materials, vibrant colors, and the
              profound essence of human experience, creating spaces that truly resonate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 bg-white text-neutral-900 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block mb-1">
                  [Client project — TBD] F&amp;B
                </span>
                <h3 className="text-2xl sm:text-3xl font-(family-name:--ueno-sans) font-medium text-neutral-900">
                  Our Approach for [Client project — TBD]
                </h3>
              </div>
              <a
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-(--ueno-forest) transition-colors"
                href="#client-project-tbd"
              >
                <span>Learn more</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <line x1="7" x2="17" y1="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
            <p className="py-6 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl">
              [Project narrative — TBD]
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 group">
                <img
                  alt="Green lacquer minimalist bespoke cafe table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB089i8f8LVtcCOhrUH3oyjQ8YEA-qJifcQDZvrDLtRAj0pFcfUmrbyaf1Uw15my-nD6U0w3mJjd18F6JKgkdhRll9wtzi2N7IkXR6ZyABOqEIVppp2Q9esldJnYZPtWUX4IIaiZMllWEB-xhvkQOSeYLKpltcfkIthFgQAGp_QtS53zCilTunVpjw-V3gkXsP26s3WJX2fg5UBLKu80LaTaE1t_PuwLC04NtvLZ3HlkBXSO1iPFRb"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/50 text-[11px] text-white backdrop-blur-sm">
                  Bespoke Joinery Table
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 group">
                <img
                  alt="Private restaurant wooden dining booths"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEXohCRM3aQpDVXungTT35Pr4UsijVuDBXCyiqBYF8k6GO0qn6GivLomeIXhwfikSRX795xvbOLnbe4LKv5luFxcUfhij-BPccYVWNTA1XhONxQRiZhtBaXXue8PJgZj2G5qRPJjA-cTgjH_Wo9_6aJe1j8iSkuBOd5HHXFpuvT2Fu_pTVhWOoCby8n5ruHipfFcspMwi0i2y51i0Pckgu6nD_N-3uqG8E3EaSOsDCjjry8haPpg0n"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/50 text-[11px] text-white backdrop-blur-sm">
                  Acoustic Walnut Partitions
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white text-neutral-900 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <h4 className="font-medium text-base sm:text-lg text-neutral-900">Semi-private areas</h4>
                <a className="text-neutral-500 hover:text-black" href="#zones">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="7" x2="17" y1="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
              <p className="text-xs text-neutral-500 mt-3 mb-6">
                Layout guides movement naturally without harsh partitions.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100">
              <img
                alt="Person sitting on low profile green curved modular couch"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp5GBZjDc5xkPng8vfe1FAECEFk68sgttMntnacSByjzzb-M_qNpb1mZQDiTyftRcBtYnkGM0df_j1EVCqn41FpHFAN0pGWzB6o9lC8mY_pV_FbNpGcQ5arGm-k24do3doMmYh__B8QAY5WB-9Qde7XMx-8Ss5b4dgojO36NX0AkUOOtF0Mk2IuHtXOsEhGjD1-QFyNQ8KlBZZsVvfSE4cMqGUs2mfitvJPzLEtrxUjQFukPDtC0HB"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
