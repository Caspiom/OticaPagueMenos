import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, ChevronRight } from 'lucide-react'
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const categories = ['Todos', 'Feminino', 'Masculino', 'Infantil', 'Unissex']

const tagColors = {
  'brand-yellow': 'bg-brand-yellow text-brand-black',
  'green-500': 'bg-green-500 text-white',
  'red-500': 'bg-red-500 text-white',
}

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered =
    activeCategory === 'Todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

  const counts = Object.fromEntries(
    categories.map((cat) => [
      cat,
      cat === 'Todos' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length,
    ])
  )

  const makeWhatsAppLink = (product) => {
    const msg = `Olá! Vi no site e tenho interesse na armação "${product.name}". Pode me dar mais informações?`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
  }

  return (
    <div className="bg-brand-black text-white overflow-x-hidden min-h-screen">
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative bg-brand-dark border-b border-white/5 pt-32 pb-14 overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(245,200,0,0.07) 0%, transparent 70%)' }}
        />
        {/* Decorative circles */}
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full border border-white/[0.03] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute right-20 top-20 w-48 h-48 rounded-full border border-white/[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-white/35 text-xs mb-8 font-medium">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-yellow">Catálogo</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="section-label mb-3">Nossa Coleção</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                Catálogo de <span className="gradient-text">Armações</span>
              </h1>
              <p className="text-white/45 text-base max-w-md leading-relaxed">
                Explore toda a nossa linha — femininas, masculinas e infantis.
                Encontrou algo? Consulte direto pelo WhatsApp.
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="text-5xl font-bold text-white/5 font-display select-none">
                {PRODUCTS.length}
              </span>
              <p className="text-white/30 text-xs -mt-1">modelos disponíveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sticky Filter Bar ─── */}
      <div className="sticky top-20 z-30 bg-brand-black/95 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3.5 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-yellow text-brand-black shadow-md shadow-brand-yellow/20'
                    : 'bg-white/5 text-white/55 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
                <span
                  className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-[22px] text-center ${
                    activeCategory === cat ? 'bg-brand-black/15 text-brand-black' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {counts[cat]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Results count */}
          <div className="flex items-center justify-between py-6 border-b border-white/[0.05] mb-8">
            <p className="text-white/35 text-sm">
              <span className="text-white/70 font-semibold">{filtered.length}</span> produto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'Todos' && (
                <span className="text-brand-yellow ml-1">em {activeCategory}</span>
              )}
            </p>
            {activeCategory !== 'Todos' && (
              <button
                onClick={() => setActiveCategory('Todos')}
                className="text-xs text-white/35 hover:text-brand-yellow transition-colors"
              >
                Limpar filtro ×
              </button>
            )}
          </div>

          {/* ─── Products Grid ─── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {filtered.map((product) => (
              <a
                key={product.id}
                href={makeWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-brand-gray rounded-2xl overflow-hidden border border-white/[0.06] hover:border-brand-yellow/40 hover:shadow-xl hover:shadow-brand-yellow/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[#F7F7F7]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.07]"
                    loading="lazy"
                  />

                  {/* Tag badge */}
                  {product.tag && (
                    <span
                      className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        tagColors[product.tagColor] || 'bg-brand-yellow text-brand-black'
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}

                  {/* Category pill — bottom of image */}
                  <span className="absolute bottom-2.5 left-2.5 bg-brand-black/75 backdrop-blur-sm text-brand-yellow text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">
                    {product.category}
                  </span>

                  {/* Hover CTA overlay */}
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/55 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-brand-yellow text-brand-black text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                      <MessageCircle size={12} />
                      Consultar
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-3.5 py-3">
                  <h3 className="text-white/85 font-semibold text-sm leading-snug truncate group-hover:text-white transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/30 text-xs mt-0.5 truncate">{product.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* ─── Bottom CTA ─── */}
          <div className="mt-20 py-12 border-t border-white/[0.07] text-center">
            <p className="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Não encontrou o modelo ideal?
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">
              Temos muito mais na loja
            </h2>
            <p className="text-white/40 text-sm mb-8 max-w-sm mx-auto">
              Visite-nos ou fale pelo WhatsApp e nossa equipe te ajuda a encontrar a armação perfeita.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o catálogo completo da Ótica Pague Menos.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
