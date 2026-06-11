import { Link } from 'react-router-dom'
import { MessageCircle, Eye } from 'lucide-react'
import { PRODUCTS, FEATURED_PRODUCTS, WHATSAPP_NUMBER } from '../constants'

const tagColors = {
  'brand-yellow': 'bg-brand-yellow text-brand-black',
  'green-500': 'bg-green-500 text-white',
  'red-500': 'bg-red-500 text-white',
}

const featured = PRODUCTS.filter((p) => FEATURED_PRODUCTS.includes(p.id))

export default function FeaturedProducts() {
  const makeWhatsAppLink = (product) => {
    const msg = `Olá! Vi no site e tenho interesse na armação "${product.name}". Pode me dar mais informações?`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  return (
    <section id="produtos" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Nossa Coleção</p>
          <h2 className="section-title mb-4">Produtos em Destaque</h2>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Descubra armações que combinam estilo, conforto e qualidade. Cada peça é
            cuidadosamente selecionada para expressar sua personalidade.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="group relative bg-brand-gray rounded-2xl overflow-hidden border border-white/5 hover:border-brand-yellow/30 card-hover"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />

                {product.tag && (
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                      tagColors[product.tagColor] || 'bg-brand-yellow text-brand-black'
                    }`}
                  >
                    {product.tag}
                  </span>
                )}

                <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={makeWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-yellow text-brand-black font-bold px-5 py-2.5 rounded-full text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Eye size={15} />
                    Ver Mais
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <div>
                  <span className="text-brand-yellow text-xs font-semibold tracking-wider uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-white font-bold text-base mt-1 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-white/45 text-xs mt-1">{product.description}</p>
                </div>

                <div className="flex items-center justify-end pt-2 border-t border-white/5">
                  <a
                    href={makeWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/50 hover:text-brand-yellow transition-colors text-xs font-semibold"
                  >
                    <MessageCircle size={13} />
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-brand-gray" />
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 70% 100% at 100% 50%, rgba(245,200,0,0.12) 0%, transparent 65%)' }}
          />
          {/* Decorative circles */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-brand-yellow/10 pointer-events-none" />
          <div className="absolute right-16 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-brand-yellow/10 pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-10">
            <div>
              <p className="text-brand-yellow text-xs font-bold tracking-[0.25em] uppercase mb-2">
                + de {Math.floor(PRODUCTS.length / 10) * 10} modelos
              </p>
              <h3 className="text-white font-display text-2xl md:text-3xl font-bold leading-snug">
                Explore o catálogo completo
              </h3>
              <p className="text-white/40 text-sm mt-1.5">
                Feminino, masculino e infantil, tudo em um só lugar.
              </p>
            </div>
            <Link
              to="/catalogo"
              className="flex-shrink-0 bg-brand-yellow text-brand-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2.5 text-sm tracking-wide shadow-lg shadow-brand-yellow/20 whitespace-nowrap"
            >
              <Eye size={17} />
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
