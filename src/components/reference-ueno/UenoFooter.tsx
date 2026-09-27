import monogramReversed from "../../../reference/logo/barcode-living-monogram-reversed.png";

export function UenoFooter() {
  return (
    <footer
      className="w-full bg-(--ueno-espresso) text-neutral-300 pt-20 pb-12 px-6 md:px-12 lg:px-16 border-t border-white/10"
      data-purpose="site-footer"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          <div className="lg:col-span-6">
            <img src={monogramReversed} alt="BARCODE Living" className="h-16 w-auto block mb-4" />
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
              Crafting contemporary architectural spaces, bespoke furniture systems, and timeless interior atmospheres
              worldwide.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-3">
              Initiate a Collaboration
            </span>
            <form className="flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full px-5 py-3.5 rounded-full bg-white/5 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white transition-colors"
                placeholder="Enter your email address"
                type="email"
              />
              <button
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-neutral-900 hover:bg-amber-100 font-medium text-sm transition-colors whitespace-nowrap"
                type="submit"
              >
                Inquire Now
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs md:text-sm border-b border-white/10">
          <div>
            <span className="block text-white font-medium mb-3">Locations</span>
            <p className="text-neutral-400 leading-relaxed">[Studio address — TBD]</p>
            <p className="text-neutral-400 mt-2">[Second location — TBD]</p>
          </div>
          <div>
            <span className="block text-white font-medium mb-3">Index</span>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">Residential Spaces</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">Hospitality &amp; F&amp;B</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">Bespoke Furniture</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">Spatial Monographs</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="block text-white font-medium mb-3">Recognition</span>
            <ul className="space-y-2 text-neutral-400">
              <li>[Recognition — TBD]</li>
              <li>[Recognition — TBD]</li>
              <li>[Recognition — TBD]</li>
              <li>[Recognition — TBD]</li>
            </ul>
          </div>
          <div>
            <span className="block text-white font-medium mb-3">Social Network</span>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a className="hover:text-white transition-colors" href="#">[Social channel — TBD]</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">[Social channel — TBD]</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">[Social channel — TBD]</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">[Social channel — TBD]</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>© 2026 BARCODE Living [Legal entity — TBD]. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-neutral-400 transition-colors" href="#">Terms of Practice</a>
            <a className="hover:text-neutral-400 transition-colors" href="#">Colophon</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
