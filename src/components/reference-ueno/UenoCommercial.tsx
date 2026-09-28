import { UenoArrow } from "./UenoArrow";
import { UenoPlate } from "./UenoPlate";

export function UenoCommercial() {
  return (
    <section
      id="commercial"
      className="on-dark relative w-full bg-(--burgundy-ink) text-white py-20 lg:py-32 px-6 lg:px-16 overflow-hidden"
      data-purpose="portfolio-commercial"
    >
      <div className="absolute inset-0 bg-dark-slats opacity-30 pointer-events-none"></div>
      <div className="relative z-10 max-w-[1312px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pb-12">
          <div className="lg:col-span-8">
            <span className="font-mono text-sm tracking-widest text-(--cream-deep)/80 block mb-2">02</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-(family-name:--ueno-sans) font-normal tracking-tight leading-tight text-white">
              Commercial Spatial Experience&nbsp;·<br />
              <span className="font-(family-name:--ueno-serif) italic font-light text-(--cream-deep)">F&amp;B Interior</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-(--cream-deep)/90 text-xs sm:text-sm leading-relaxed border-l border-white/14 pl-6 pt-2">
            <p>
              BARCODE Living crafts stunning interiors that seamlessly blend organic materials, vibrant colors, and the
              profound essence of human experience, creating spaces that truly resonate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <div className="on-light lg:col-span-8 bg-white text-(--burgundy-ink) p-10 flex flex-col">
            <div className="flex items-center justify-between gap-6 pb-6 border-b border-(--burgundy-ink)/18">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-(--burgundy-light) block mb-1">
                  [Client project — TBD] F&amp;B
                </span>
                <h3 className="text-2xl sm:text-3xl font-(family-name:--ueno-sans) font-medium text-(--burgundy-ink)">
                  Our Approach for [Client project — TBD]
                </h3>
              </div>
              <a
                className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-(--burgundy-ink) border-b border-(--burgundy-ink) pb-1 hover:text-(--burgundy-deep) hover:border-(--burgundy-deep) transition-colors"
                href="#client-project-tbd"
              >
                <span>Learn more</span>
                <UenoArrow />
              </a>
            </div>
            <p className="py-6 text-xs sm:text-sm text-(--burgundy-light) leading-relaxed max-w-2xl">
              [Project narrative — TBD]
            </p>
            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <img
                  alt="Placeholder photo: green lacquer café table with woven chairs"
                  className="w-full aspect-[4/3] object-cover bg-(--burgundy-ink)/5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB089i8f8LVtcCOhrUH3oyjQ8YEA-qJifcQDZvrDLtRAj0pFcfUmrbyaf1Uw15my-nD6U0w3mJjd18F6JKgkdhRll9wtzi2N7IkXR6ZyABOqEIVppp2Q9esldJnYZPtWUX4IIaiZMllWEB-xhvkQOSeYLKpltcfkIthFgQAGp_QtS53zCilTunVpjw-V3gkXsP26s3WJX2fg5UBLKu80LaTaE1t_PuwLC04NtvLZ3HlkBXSO1iPFRb"
                />
                <UenoPlate fig="07">Café table</UenoPlate>
              </div>
              <div>
                <img
                  alt="Placeholder photo: wooden restaurant dining booths"
                  className="w-full aspect-[4/3] object-cover bg-(--burgundy-ink)/5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEXohCRM3aQpDVXungTT35Pr4UsijVuDBXCyiqBYF8k6GO0qn6GivLomeIXhwfikSRX795xvbOLnbe4LKv5luFxcUfhij-BPccYVWNTA1XhONxQRiZhtBaXXue8PJgZj2G5qRPJjA-cTgjH_Wo9_6aJe1j8iSkuBOd5HHXFpuvT2Fu_pTVhWOoCby8n5ruHipfFcspMwi0i2y51i0Pckgu6nD_N-3uqG8E3EaSOsDCjjry8haPpg0n"
                />
                <UenoPlate fig="08">Dining booths</UenoPlate>
              </div>
            </div>
          </div>

          <div className="on-light lg:col-span-4 bg-white text-(--burgundy-ink) p-10 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-(--burgundy-ink)/18">
              <h4 className="font-medium text-base sm:text-lg text-(--burgundy-ink)">Semi-private areas</h4>
              <a
                aria-label="Semi-private areas"
                className="text-(--burgundy-light) hover:text-(--burgundy-deep) transition-colors"
                href="#zones"
              >
                <UenoArrow />
              </a>
            </div>
            <p className="text-xs text-(--burgundy-light) mt-3 mb-6">Layout guides movement naturally without harsh partitions.</p>
            <div className="mt-auto">
              <img
                alt="Placeholder photo: person seated on a low curved green sofa"
                className="w-full aspect-[4/3] object-cover bg-(--burgundy-ink)/5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp5GBZjDc5xkPng8vfe1FAECEFk68sgttMntnacSByjzzb-M_qNpb1mZQDiTyftRcBtYnkGM0df_j1EVCqn41FpHFAN0pGWzB6o9lC8mY_pV_FbNpGcQ5arGm-k24do3doMmYh__B8QAY5WB-9Qde7XMx-8Ss5b4dgojO36NX0AkUOOtF0Mk2IuHtXOsEhGjD1-QFyNQ8KlBZZsVvfSE4cMqGUs2mfitvJPzLEtrxUjQFukPDtC0HB"
              />
              <UenoPlate fig="09">Curved green sofa</UenoPlate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
