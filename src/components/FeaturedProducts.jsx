import { useState } from 'react'
import { MessageCircle, Eye } from 'lucide-react'
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants'

const categories = ['Todos', 'Feminino', 'Masculino', 'Unissex']

const tagColors = {
  'brand-yellow': 'bg-brand-yellow text-brand-black',
  'green-500': 'bg-green-500 text-white',
  'red-500': 'bg-red-500 text-white',
}

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered =
    activeCategory === 'Todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

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

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-yellow text-brand-black'
                  : 'border border-white/20 text-white/60 hover:border-brand-yellow/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
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

                {/* Tag */}
                {product.tag && (
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                      tagColors[product.tagColor] || 'bg-brand-yellow text-brand-black'
                    }`}
                  >
                    {product.tag}
                  </span>
                )}

                {/* Hover overlay */}
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

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-brand-yellow font-bold text-sm">{product.price}</span>
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

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-white/45 text-sm mb-4">
            Não encontrou o que procura? Temos muito mais na loja!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o catálogo completo da Ótica Pague Menos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <MessageCircle size={16} />
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  )
}
