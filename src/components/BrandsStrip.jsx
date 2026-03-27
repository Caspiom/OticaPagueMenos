import { BRANDS } from '../constants'

export default function BrandsStrip() {
  // Duplicate for seamless loop
  const allBrands = [...BRANDS, ...BRANDS]

  return (
    <section className="bg-brand-dark border-y border-white/5 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="section-label text-center">Nossas Marcas Parceiras</p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <div className="brands-track">
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center gap-3 group cursor-default"
            >
              {/* Decorative dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow/50 group-hover:bg-brand-yellow transition-colors" />
              <span className="text-white/40 group-hover:text-white/80 transition-colors duration-300 text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
