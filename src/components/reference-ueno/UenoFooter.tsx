import lockupTransparent from "../../../reference/logo/barcode-living-lockup-transparent.png";

export function UenoFooter() {
  return (
    <footer
      className="w-full bg-white text-(--burgundy-light) pt-20 pb-12 px-6 md:px-12 lg:px-16 border-t border-(--burgundy-ink)/15"
      data-purpose="site-footer"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-(--burgundy-ink)/15 items-start">
          <div className="lg:col-span-6">
            <img src={lockupTransparent} alt="BARCODE Living" className="h-16 w-auto block mb-4" />
            <p className="text-(--burgundy-light) text-sm max-w-md leading-relaxed">
              Crafting contemporary architectural spaces, bespoke furniture systems, and timeless interior atmospheres
              worldwide.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <span className="text-xs uppercase tracking-wider text-(--burgundy-light) font-mono mb-3">
              Initiate a Collaboration
            </span>
            <form className="flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full px-5 py-3.5 rounded-full bg-white border border-(--burgundy-ink)/25 text-(--burgundy-ink) placeholder-(--burgundy-light) text-sm focus:outline-none focus:border-(--burgundy-ink) transition-colors"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-(--burgundy-ink) text-white hover:bg-(--burgundy-deep) font-medium text-sm transition-colors whitespace-nowrap"
                type="submit"
              >
                Inquire Now
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs md:text-sm border-b border-(--burgundy-ink)/15">
          <div>
            <span className="block text-(--burgundy-ink) font-medium mb-3">Locations</span>
            <p className="text-(--burgundy-light) leading-relaxed">[Studio address — TBD]</p>
            <p className="text-(--burgundy-light) mt-2">[Second location — TBD]</p>
          </div>
          <div>
            <span className="block text-(--burgundy-ink) font-medium mb-3">Index</span>
            <ul className="space-y-2 text-(--burgundy-light)">
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">Residential Spaces</a>
              </li>
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">Hospitality &amp; F&amp;B</a>
              </li>
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">Bespoke Furniture</a>
              </li>
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">Spatial Monographs</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="block text-(--burgundy-ink) font-medium mb-3">Recognition</span>
            <ul className="space-y-2 text-(--burgundy-light)">
              <li>[Recognition — TBD]</li>
              <li>[Recognition — TBD]</li>
              <li>[Recognition — TBD]</li>
              <li>[Recognition — TBD]</li>
            </ul>
          </div>
          <div>
            <span className="block text-(--burgundy-ink) font-medium mb-3">Social Network</span>
            <ul className="space-y-2 text-(--burgundy-light)">
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">[Social channel — TBD]</a>
              </li>
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">[Social channel — TBD]</a>
              </li>
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">[Social channel — TBD]</a>
              </li>
              <li>
                <a className="hover:text-(--burgundy-deep) transition-colors" href="#">[Social channel — TBD]</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-(--burgundy-light) gap-4">
          <div>© 2026 BARCODE Living [Legal entity — TBD]. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-(--burgundy-deep) transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-(--burgundy-deep) transition-colors" href="#">Terms of Practice</a>
            <a className="hover:text-(--burgundy-deep) transition-colors" href="#">Colophon</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
